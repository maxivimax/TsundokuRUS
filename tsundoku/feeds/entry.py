from pathlib import Path

from asyncpg import Record
from quart.ctx import AppContext

from tsundoku.webhooks import Webhook


class Entry:
    def __init__(self, app: AppContext, record: Record):
        self.id = record["id"]
        self.show_id = record["show_id"]
        self.episode = record["episode"]
        self.state = record["current_state"]
        self.torrent_hash = record["torrent_hash"]

        fp = record["file_path"]
        self.file_path = Path(fp) if fp is not None else None

        self._app = app
        self._record = record

    def to_dict(self) -> dict:
        """
        Returns the Entry object as a dictionary.
        """
        return {
            "id": self.id,
            "show_id": self.show_id,
            "episode": self.episode,
            "state": self.state,
            "torrent_hash": self.torrent_hash,
            "file_path": str(self.file_path)
        }

    async def set_state(self, new_state: str) -> None:
        """
        Updates the database and local object's state.

        Parameters
        ----------
        new_state: str
            The new state to update to.
        """
        self.state = new_state
        async with self._app.db_pool.acquire() as con:
            await con.execute("""
                UPDATE show_entry SET
                    current_state = $1
                WHERE id=$2;
            """, new_state, self.id)

        await self._handle_webhooks()

    async def set_path(self, new_path: Path) -> None:
        """
        Updates the database and local object's file path.

        Parameters
        ----------
        new_path: str
            The new path to update to.
        """
        self.file_path = new_path
        async with self._app.db_pool.acquire() as con:
            await con.execute("""
                UPDATE show_entry SET
                    file_path = $1
                WHERE id=$2;
            """, str(new_path), self.id)

    async def _handle_webhooks(self) -> None:
        """
        On a state change, if the state is listed as a post event
        for this show, then send this entry to the webhook handling.

        This is an internal method and shouldn't be called unless
        a state change occurs. If called improperly, duplicate
        sends could occur.

        Uses the `self.state` attribute, so call this after
        that is updated.
        """
        webhooks = await Webhook.from_show_id(self._app, self.show_id)

        for wh in webhooks:
            triggers = await wh.get_triggers()
            if self.state in triggers:
                await wh.send(self.episode, self.state)
