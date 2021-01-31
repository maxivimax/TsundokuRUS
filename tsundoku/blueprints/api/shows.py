import logging
from typing import List, Union, Optional

from quart import request, views
from quart import current_app as app

from .response import APIResponse
from tsundoku.kitsu import KitsuManager
from tsundoku.webhooks import Webhook


logger = logging.getLogger("tsundoku")


status_html_map = {
    "current": "<span class='img-overlay-span tag is-success'>Airing</span>",
    "finished": "<span class='img-overlay-span tag is-danger'>Finished</span>",
    "tba": "<span class='img-overlay-span tag is-warning'>TBA</span>",
    "unreleased": "<span class='img-overlay-span tag is-info'>Unreleased</span>",
    "upcoming": "<span class='img-overlay-span tag is-primary'>Upcoming</span>"
}


class ShowsAPI(views.MethodView):
    def _doc_get_0(self):
        """
        Retrieves a list of all shows stored in the database.

        .. :quickref: Shows; Retrieve all shows.

        :status 200: shows found

        :returns: List[:class:`dict`]
        """

    def _doc_get_1(self):
        """
        Retrieves a single show based on its ID.

        .. :quickref: Shows; Retrieve a show.

        :status 200: the show found
        :status 404: show with passed id not found

        :returns: :class:`dict`
        """

    async def get(self, show_id: Optional[int]) -> Union[dict, List[dict]]:
        """
        get_0: without the `show_id` argument.
        get_1: with the `show_id` argument.
        """
        if show_id is None:
            async with app.db_pool.acquire() as con:
                shows = await con.fetch("""
                    SELECT
                        id,
                        title,
                        desired_format,
                        desired_folder,
                        season,
                        episode_offset
                    FROM
                        shows;
                """)
                shows = [dict(s) for s in shows]
                for s in shows:
                    entries = await con.fetch("""
                        SELECT
                            id,
                            show_id,
                            episode,
                            current_state
                        FROM
                            show_entry
                        WHERE show_id=$1
                        ORDER BY episode ASC;
                    """, s["id"])
                    s["entries"] = [dict(e) for e in entries]
                    s["webhooks"] = []
                    webhooks = await Webhook.from_show_id(app, s["id"])
                    for webhook in webhooks:
                        triggers = await webhook.get_triggers()
                        webhook = webhook.to_dict()
                        webhook["triggers"] = triggers
                        s["webhooks"].append(webhook)

                    manager = await KitsuManager.from_show_id(s["id"])
                    if manager:
                        status = await manager.get_status()
                        if status:
                            s["status"] = status_html_map[status]
                        s["kitsu_id"] = manager.kitsu_id
                        s["image"] = await manager.get_poster_image()
                        s["link"] = manager.link

                return APIResponse(
                    result=[dict(record) for record in shows]
                )
        else:
            async with app.db_pool.acquire() as con:
                s = await con.fetchrow("""
                    SELECT
                        id,
                        title,
                        desired_format,
                        desired_folder,
                        season,
                        episode_offset
                    FROM
                        shows
                    WHERE id=$1;
                """, show_id)

                if not s:
                    return APIResponse(
                        status=404,
                        error="Show with specified ID does not exist."
                    )

                s = dict(s)
                entries = await con.fetch("""
                    SELECT
                        id,
                        show_id,
                        episode,
                        current_state
                    FROM
                        show_entry
                    WHERE show_id=$1
                    ORDER BY episode ASC;
                """, s["id"])
                s["entries"] = [dict(e) for e in entries]
                s["webhooks"] = []
                webhooks = await Webhook.from_show_id(app, s["id"])
                for webhook in webhooks:
                    triggers = await webhook.get_triggers()
                    webhook = webhook.to_dict()
                    webhook["triggers"] = triggers
                    s["webhooks"].append(webhook)

                manager = await KitsuManager.from_show_id(s["id"])
                if manager:
                    status = await manager.get_status()
                    if status:
                        s["status"] = status_html_map[status]
                    s["kitsu_id"] = manager.kitsu_id
                    s["image"] = await manager.get_poster_image()
                    s["link"] = manager.link

            return APIResponse(
                result=dict(s)
            )


    async def post(self, show_id: None) -> dict:
        """
        Adds a new show to the database.

        .. :quickref: Shows; Add a new show.

        :status 200: show added successfully
        :status 400: bad or missing arguments
        :status 500: unexpected server error

        :form string title: the new show's title
        :form string desired_format: the new show's desired file format
        :form string desired_folder: the new show's target folder for moving
        :form integer season: the season to use when naming the show
        :form integer episode_offset: the episode offset to use when renaming (default :code:`0`)

        :returns: :class:`dict`
        """
        # show_id here will always be None. Having it as a parameter
        # is required due to how the defaults are handled with GET
        # and POST methods on the routing table.
        arguments = await request.get_json()

        # patch for ajax call
        if not arguments:
            await request.get_data()
            arguments = await request.form

        desired_format = arguments.get("desired_format")
        desired_folder = arguments.get("desired_folder")

        season = arguments.get("season")
        if season is None:
            return APIResponse(
                status=400,
                error="Missing season argument."
            )

        try:
            season = int(season)
        except ValueError:
            return APIResponse(
                status=400,
                error="Season is not an integer."
            )

        episode_offset = arguments.get("episode_offset")
        if episode_offset is None:
            episode_offset = 0
        else:
            try:
                episode_offset = int(episode_offset)
            except ValueError:
                return APIResponse(
                    status=400,
                    error="Episode offset is not an integer."
                )

        async with app.db_pool.acquire() as con:
            new_id = await con.fetchval("""
                INSERT INTO
                    shows
                    (title, desired_format, desired_folder,
                    season, episode_offset)
                VALUES
                    ($1, $2, $3, $4, $5)
                RETURNING id;
            """, arguments["title"], desired_format, desired_folder, season,
            episode_offset)

            await con.execute("""
                INSERT INTO
                    webhook
                    (show_id, base)
                SELECT ($1), id FROM webhook_base
                ON CONFLICT DO NOTHING;
            """, new_id)

        await KitsuManager.fetch(new_id, arguments["title"])

        logger.info("New Show Added - Preparing to Check for New Releases")
        for parser in app.rss_parsers:
            feed = await app.poller.get_feed_from_parser(parser)

            logger.info(f"{parser.name} - Checking for New Releases...")
            await app.poller.check_feed(feed)
            logger.info(f"{parser.name} - Checked for New Releases")

        async with app.db_pool.acquire() as con:
            new_show = await con.fetchrow("""
                SELECT
                    id,
                    title,
                    desired_format,
                    desired_folder,
                    season,
                    episode_offset
                FROM
                    shows
                WHERE id=$1;
            """, new_id)

        if new_show:
            return APIResponse(
                result=dict(new_show)
            )
        else:
            return APIResponse(
                status=500,
                error="The server failed to add the new Show."
            )


    async def put(self, show_id: int) -> dict:
        """
        Updates a specified show using the given parameters.

        .. :quickref: Shows; Update an existing show.

        :status 200: show updated successfully
        :status 500: unexpected server error

        :form string title: the new title
        :form string desired_format: the new desired format
        :form string desired_folder: the new desired folder
        :form integer season: the new season
        :form integer episode_offset: the new episode offset

        :returns: :class:`dict`
        """
        await request.get_data()
        arguments = await request.form

        if not arguments["desired_format"]:
            desired_format = None
        else:
            desired_format = arguments["desired_format"]

        if not arguments["desired_folder"]:
            desired_folder = None
        else:
            desired_folder = arguments["desired_folder"]

        season = int(arguments["season"])
        episode_offset = int(arguments["episode_offset"])

        async with app.db_pool.acquire() as con:
            old_title = await con.fetchval("""
                SELECT
                    title
                FROM
                    shows
                WHERE id=$1;
            """, show_id)

            if old_title != arguments["title"]:
                await KitsuManager.fetch(show_id, arguments["title"])

            old_kitsu = await con.fetchval("""
                SELECT
                    kitsu_id
                FROM
                    kitsu_info
                WHERE
                    show_id=$1;
            """, show_id)

            try:
                new_kitsu = int(arguments["kitsu_id"])
                if old_kitsu != new_kitsu:
                    await KitsuManager.fetch_by_kitsu(show_id, new_kitsu)
            except ValueError:
                pass

            await con.execute("""
                UPDATE
                    shows
                SET
                    title=$1,
                    desired_format=$2,
                    desired_folder=$3,
                    season=$4,
                    episode_offset=$5
                WHERE id=$6;
            """, arguments["title"], desired_format, desired_folder, season,
            episode_offset, show_id)

        logger.info("Existing Show Updated - Preparing to Check for New Releases")
        for parser in app.rss_parsers:
            feed = await app.poller.get_feed_from_parser(parser)

            logger.info(f"{parser.name} - Checking for New Releases...")
            await app.poller.check_feed(feed)
            logger.info(f"{parser.name} - Checked for New Releases")

        async with app.db_pool.acquire() as con:
            new_show = await con.fetchrow("""
                SELECT
                    id,
                    title,
                    desired_format,
                    desired_folder,
                    season,
                    episode_offset
                FROM
                    shows
                WHERE id=$1;
            """, show_id)

        if new_show:
            return APIResponse(
                result=dict(new_show)
            )
        else:
            return APIResponse(
                status=500,
                error="The server failed to update the existing Show."
            )


    async def delete(self, show_id: int) -> dict:
        """
        Deletes a show with the specified ID.

        This will delete all entries of that show as well.

        .. :quickref: Shows; Delete a show.

        :status 200: show deleted successfully
        :status 404: show with id not found

        :returns: :class:`bool`
        """
        async with app.db_pool.acquire() as con:
            deleted = await con.fetchval("""
                DELETE FROM
                    shows
                WHERE id=$1
                RETURNING id;
            """, show_id)

        if deleted:
            return APIResponse(
                result=True
            )
        else:
            return APIResponse(
                status=404,
                error="Show with specified ID does not exist."
            )
