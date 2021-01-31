(() => {
    "use strict";
    var __webpack_modules__ = {
            16: (e, o, t) => {
                t.d(o, {
                    Z: () => r
                });
                var a = t(645),
                    n = t.n(a)()((function(e) {
                        return e[1]
                    }));
                n.push([e.id, ".is-scrollable{overflow-y:auto}.dashboard{display:flex;flex-direction:row}.dashboard.is-full-height{height:100vh}.dashboard-panel{display:flex;flex-direction:column;padding:2rem 1.5rem;flex:0 0 25rem;height:100%}.dashboard-panel.left{flex:0 0 25rem}.dashboard-panel.right{flex:0 0 25rem}.dashboard-panel.has-thick-padding{padding:3rem 2rem}.dashboard-panel.is-one-quarter{flex:0 0 25%}.dashboard-panel.is-half{flex:0 0 50%}.dashboard-panel.is-one-third{flex:0 0 33.3333333333%}.dashboard-panel.is-small{flex:0 0 15rem}.dashboard-panel.is-medium{flex:0 0 20rem}.dashboard-panel.is-large{flex:0 0 30rem}.dashboard-panel-header.is-centered,.dashboard-panel-content.is-centered,.dashboard-panel-footer.is-centered{display:flex;justify-content:center}.dashboard-panel-header{margin-bottom:2rem}.dashboard-panel-main{flex:1}.dashboard-panel-footer{margin-top:2rem}.dashboard-main{display:flex;flex:1;display:flex;flex-direction:column;min-height:100vh}.dashboard-main .navbar.is-fixed-top{position:-webkit-sticky;position:sticky;top:0}.dashboard-main .footer{flex:1}\n", ""]);
                const r = n
            },
            645: e => {
                e.exports = function(e) {
                    var o = [];
                    return o.toString = function() {
                        return this.map((function(o) {
                            var t = e(o);
                            return o[2] ? "@media ".concat(o[2], " {").concat(t, "}") : t
                        })).join("")
                    }, o.i = function(e, t, a) {
                        "string" == typeof e && (e = [
                            [null, e, ""]
                        ]);
                        var n = {};
                        if (a)
                            for (var r = 0; r < this.length; r++) {
                                var d = this[r][0];
                                null != d && (n[d] = !0)
                            }
                        for (var i = 0; i < e.length; i++) {
                            var s = [].concat(e[i]);
                            a && n[s[0]] || (t && (s[2] ? s[2] = "".concat(t, " and ").concat(s[2]) : s[2] = t), o.push(s))
                        }
                    }, o
                }
            },
            312: (e, o, t) => {
                t.r(o), t.d(o, {
                    default: () => d
                });
                var a = t(379),
                    n = t.n(a),
                    r = t(16);
                n()(r.Z, {
                    insert: "head",
                    singleton: !1
                });
                const d = r.Z.locals || {}
            },
            379: (e, o, t) => {
                var a, n = function() {
                        var e = {};
                        return function(o) {
                            if (void 0 === e[o]) {
                                var t = document.querySelector(o);
                                if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                                    t = t.contentDocument.head
                                } catch (e) {
                                    t = null
                                }
                                e[o] = t
                            }
                            return e[o]
                        }
                    }(),
                    r = [];

                function d(e) {
                    for (var o = -1, t = 0; t < r.length; t++)
                        if (r[t].identifier === e) {
                            o = t;
                            break
                        } return o
                }

                function i(e, o) {
                    for (var t = {}, a = [], n = 0; n < e.length; n++) {
                        var i = e[n],
                            s = o.base ? i[0] + o.base : i[0],
                            l = t[s] || 0,
                            c = "".concat(s, " ").concat(l);
                        t[s] = l + 1;
                        var h = d(c),
                            u = {
                                css: i[1],
                                media: i[2],
                                sourceMap: i[3]
                            }; - 1 !== h ? (r[h].references++, r[h].updater(u)) : r.push({
                            identifier: c,
                            updater: m(u, o),
                            references: 1
                        }), a.push(c)
                    }
                    return a
                }

                function s(e) {
                    var o = document.createElement("style"),
                        a = e.attributes || {};
                    if (void 0 === a.nonce) {
                        var r = t.nc;
                        r && (a.nonce = r)
                    }
                    if (Object.keys(a).forEach((function(e) {
                            o.setAttribute(e, a[e])
                        })), "function" == typeof e.insert) e.insert(o);
                    else {
                        var d = n(e.insert || "head");
                        if (!d) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        d.appendChild(o)
                    }
                    return o
                }
                var l, c = (l = [], function(e, o) {
                    return l[e] = o, l.filter(Boolean).join("\n")
                });

                function h(e, o, t, a) {
                    var n = t ? "" : a.media ? "@media ".concat(a.media, " {").concat(a.css, "}") : a.css;
                    if (e.styleSheet) e.styleSheet.cssText = c(o, n);
                    else {
                        var r = document.createTextNode(n),
                            d = e.childNodes;
                        d[o] && e.removeChild(d[o]), d.length ? e.insertBefore(r, d[o]) : e.appendChild(r)
                    }
                }

                function u(e, o, t) {
                    var a = t.css,
                        n = t.media,
                        r = t.sourceMap;
                    if (n ? e.setAttribute("media", n) : e.removeAttribute("media"), r && "undefined" != typeof btoa && (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), e.styleSheet) e.styleSheet.cssText = a;
                    else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(a))
                    }
                }
                var p = null,
                    f = 0;

                function m(e, o) {
                    var t, a, n;
                    if (o.singleton) {
                        var r = f++;
                        t = p || (p = s(o)), a = h.bind(null, t, r, !1), n = h.bind(null, t, r, !0)
                    } else t = s(o), a = u.bind(null, t, o), n = function() {
                        ! function(e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    };
                    return a(e),
                        function(o) {
                            if (o) {
                                if (o.css === e.css && o.media === e.media && o.sourceMap === e.sourceMap) return;
                                a(e = o)
                            } else n()
                        }
                }
                e.exports = function(e, o) {
                    (o = o || {}).singleton || "boolean" == typeof o.singleton || (o.singleton = (void 0 === a && (a = Boolean(window && document && document.all && !window.atob)), a));
                    var t = i(e = e || [], o);
                    return function(e) {
                        if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                            for (var a = 0; a < t.length; a++) {
                                var n = d(t[a]);
                                r[n].references--
                            }
                            for (var s = i(e, o), l = 0; l < t.length; l++) {
                                var c = d(t[l]);
                                0 === r[c].references && (r[c].updater(), r.splice(c, 1))
                            }
                            t = s
                        }
                    }
                }
            },
            561: (__unused_webpack_module, exports, __webpack_require__) => {
                var __webpack_unused_export__;
                __webpack_unused_export__ = {
                    value: !0
                }, __webpack_require__(312);
                var entriesToDelete = [],
                    entriesToAdd = [],
                    all_triggers = ["downloading", "downloaded", "renamed", "moved", "completed"],
                    modalsCanBeClosed = !0;

                function showAddorEditProgressBars() {
                    modalsCanBeClosed = !1, $(".closes-modals").addClass("is-hidden"), $(".submits-modals").addClass("is-hidden"), $("progress").removeClass("is-hidden")
                }

                function hideAddorEditProgressBars() {
                    modalsCanBeClosed = !0, $(".closes-modals").removeClass("is-hidden"), $(".submits-modals").removeClass("is-hidden"), $("progress").addClass("is-hidden")
                }

                function updateTsundoku() {
                    modalsCanBeClosed = !1, $("#updating-pg-bar").removeClass("is-hidden"), $("#update-button").addClass("is-hidden"), $("#close-update-modal-button").addClass("is-hidden"), $.ajax({
                        url: "/update",
                        type: "POST"
                    }), setTimeout((function e() {
                        setTimeout((function() {
                            $.ajax({
                                url: "/",
                                type: "GET",
                                success: function() {
                                    location.reload()
                                },
                                statusCode: {
                                    302: function(e) {
                                        location.reload()
                                    }
                                },
                                complete: function() {
                                    e()
                                },
                                timeout: 1e3
                            })
                        }), 1e3)
                    }), 5e3)
                }

                function submitAddOrEditShowForm(e) {
                    showAddorEditProgressBars(), e.preventDefault();
                    var o = $(this).closest("form").attr("action"),
                        t = $(this).closest("form").attr("method"),
                        a = $(this).closest("form").serialize();
                    updateWebhooks();
                    for (var n = 0, r = entriesToDelete; n < r.length; n++) deleteShowEntry((s = r[n])[0], s[1]);
                    for (var d = 0, i = entriesToAdd; d < i.length; d++) {
                        var s;
                        addShowEntry((s = i[d])[0], s[1], s[2])
                    }
                    $.ajax({
                        url: o,
                        type: t,
                        data: a,
                        success: function(e) {
                            location.reload()
                        },
                        error: function(e, o, t) {
                            hideAddorEditProgressBars(), alert("There was an error processing the request.")
                        }
                    })
                }

                function updateWebhooks() {
                    document.getElementById("show-webhook-table") && $("#show-webhook-table tbody tr").each((function() {
                        var e = $(this).data("webhook"),
                            o = $(this).data("show"),
                            t = [];
                        $(this).find("input").each((function() {
                            $(this).prop("checked") && t.push($(this).attr("name"))
                        }));
                        var a = "/api/v1/shows/" + o + "/webhooks/" + e,
                            n = {
                                triggers: t.join()
                            };
                        $.ajax({
                            url: a,
                            type: "PUT",
                            data: n,
                            error: function(e, o, t) {
                                console.error(o + ": " + t)
                            }
                        })
                    }))
                }

                function bufferShowEntryAddition(e) {
                    e.preventDefault();
                    for (var o = $(this).closest("form")[0], t = new FormData(o), a = parseInt(t.get("show_id")), n = parseInt(t.get("episode")), r = t.get("magnet"), d = document.querySelector("#show-entry-table tbody"), i = [], s = 0, l = Array.from(d.rows); s < l.length; s++) {
                        var c = l[s].cells[0],
                            h = parseInt(c.innerHTML);
                        i.push(h)
                    }
                    for (var u = 0, p = entriesToAdd; u < p.length; u++) {
                        var f = p[u];
                        i.push(f[1])
                    }
                    if (i.includes(n)) return $("#add-show-entry-form input[name='episode']").addClass("is-danger").effect("shake", {
                        distance: 5,
                        times: 2
                    }, 400), void $("#add-show-entry-form p").removeClass("is-hidden");
                    $("#add-show-entry-form input[name='episode']").removeClass("is-danger"), $("#add-show-entry-form p").addClass("is-hidden"), entriesToAdd.push([a, n, r]), addRowToShowEntryTable({
                        id: 0,
                        show_id: a,
                        current_state: "buffered",
                        episode: n
                    })
                }

                function sortedIndex(e, o) {
                    for (var t = 0, a = e.length; t < a;) {
                        var n = t + a >>> 1;
                        e[n] < o ? t = n + 1 : a = n
                    }
                    return t
                }

                function addRowToShowEntryTable(e) {
                    for (var o = document.querySelector("#show-entry-table tbody"), t = [], a = 0, n = Array.from(o.rows); a < n.length; a++) {
                        var r = n[a].cells[0],
                            d = parseInt(r.innerHTML);
                        t.push(d)
                    }
                    var i = sortedIndex(t, e.episode),
                        s = o.insertRow(i),
                        l = s.insertCell(0),
                        c = s.insertCell(1),
                        h = s.insertCell(2);
                    $(l).html(e.episode.toString()), $(c).html(e.current_state);
                    var u = document.createElement("button");
                    $(u).addClass("delete"), $(u).on("click", (function() {
                        "buffered" !== e.current_state && bufferShowEntryDeletion(e.show_id, e.id), entriesToAdd = entriesToAdd.filter((function(o) {
                            return o[1] != e.episode
                        })), this.parentNode.parentNode.remove()
                    })), h.appendChild(u)
                }

                function addRowToShowWebhookTable(webhook) {
                    var table = document.querySelector("#show-webhook-table tbody"),
                        row = table.insertRow(-1);
                    $(row).addClass("has-text-centered"), $(row).data("webhook", webhook.wh_id), $(row).data("show", webhook.show_id);
                    for (var cell_basewh = row.insertCell(0), cell_t_downloading = row.insertCell(1), cell_t_downloaded = row.insertCell(2), cell_t_renamed = row.insertCell(3), cell_t_moved = row.insertCell(4), cell_t_completed = row.insertCell(5), cells = [cell_t_downloading, cell_t_downloaded, cell_t_renamed, cell_t_moved, cell_t_completed], _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
                        var cell = cells_1[_i];
                        $(cell).addClass("is-vcentered");
                        var checkbox = document.createElement("input");
                        $(checkbox).attr("type", "checkbox").appendTo($(cell))
                    }
                    for (var _a = 0, all_triggers_1 = all_triggers; _a < all_triggers_1.length; _a++) {
                        var trigger = all_triggers_1[_a],
                            input = $(eval("cell_t_" + trigger)).find("input");
                        $(input).attr("name", trigger), webhook.triggers.includes(trigger) && input.prop("checked", !0)
                    }
                    var p = document.createElement("p");
                    $(p).html(webhook.base.name), $(p).appendTo($(cell_basewh))
                }

                function bufferShowEntryDeletion(e, o) {
                    entriesToDelete.push([e, o])
                }

                function deleteShowEntry(e, o) {
                    var t = "/api/v1/shows/" + e + "/entries/" + o;
                    $.ajax({
                        url: t,
                        type: "DELETE"
                    })
                }

                function addShowEntry(e, o, t) {
                    var a = "/api/v1/shows/" + e + "/entries",
                        n = {
                            episode: o,
                            magnet: t
                        };
                    $.ajax({
                        url: a,
                        type: "POST",
                        data: $.param(n),
                        async: !1
                    })
                }

                function deleteShowCache(e) {
                    var o = "/api/v1/shows/" + e + "/cache";
                    $.ajax({
                        url: o,
                        type: "DELETE",
                        success: function() {
                            window.location.reload()
                        }
                    })
                }

                function displayShowInfo() {
                    $("#edit-control-tabs ul li").removeClass("is-active"), $("#show-info-tab").addClass("is-active"), $("#edit-show-form").removeClass("is-hidden"), $("#entry-tab-display").addClass("is-hidden"), $("#webhook-tab-display").addClass("is-hidden")
                }

                function displayShowEntries() {
                    $("#edit-control-tabs ul li").removeClass("is-active"), $("#show-entry-tab").addClass("is-active"), $("#edit-show-form").addClass("is-hidden"), $("#entry-tab-display").removeClass("is-hidden"), $("#webhook-tab-display").addClass("is-hidden")
                }

                function displayShowWebhooks() {
                    $("#edit-control-tabs ul li").removeClass("is-active"), $("#show-webhooks-tab").addClass("is-active"), $("#edit-show-form").addClass("is-hidden"), $("#entry-tab-display").addClass("is-hidden"), $("#webhook-tab-display").removeClass("is-hidden")
                }

                function openAddShowModal() {
                    var e = $("#add-show-form");
                    e.trigger("reset"), e.attr("action", "/api/v1/shows"), e.attr("method", "POST"), e.on("submit", submitAddOrEditShowForm), $(document.documentElement).addClass("is-clipped"), $("#add-show-modal").addClass("is-active")
                }

                function openEditShowModal(e) {
                    var o = $("#edit-show-form"),
                        t = $("#add-show-entry-form"),
                        a = $("#show-entry-table tbody"),
                        n = $("#show-webhook-table tbody");
                    displayShowInfo(), o.trigger("reset"), t.trigger("reset"), $("#edit-show-form :input").each((function(o, t) {
                        $(t).val(e[$(t).attr("name")])
                    })), $("#fix-match-input").val(e.kitsu_id), a.empty(), n.empty();
                    for (var r = 0, d = e.entries; r < d.length; r++) addRowToShowEntryTable(d[r]);
                    for (var i = 0, s = e.webhooks; i < s.length; i++) addRowToShowWebhookTable(s[i]);
                    $("#add-show-entry-form input[name='show_id']").val(e.id), o.attr("method", "PUT"), o.attr("action", "/api/v1/shows/" + e.id), o.on("submit", submitAddOrEditShowForm), t.on("submit", bufferShowEntryAddition), $("#del-cache-btn").on("click", (function() {
                        deleteShowCache(e.id)
                    })), $(document.documentElement).addClass("is-clipped"), $("#edit-show-modal").addClass("is-active")
                }

                function openDeleteShowModal(e) {
                    $("#delete-show-button").on("click", (function(o) {
                        o.preventDefault(), $.ajax({
                            url: "/api/v1/shows/" + e.id,
                            type: "DELETE",
                            success: function() {
                                location.reload()
                            }
                        })
                    })), $("#item-to-delete-name").text(e.title), $(document.documentElement).addClass("is-clipped"), $("#delete-show-modal").addClass("is-active")
                }

                function toggleFixMatchDropdown() {
                    $("#fix-match-dropdown").toggleClass("is-active")
                }

                function closeModals() {
                    modalsCanBeClosed && (entriesToDelete = [], entriesToAdd = [], $(".modal").removeClass("is-active"), $("#add-show-entry-form input[name='episode']").removeClass("is-danger"), $("#add-show-entry-form p").addClass("is-hidden"), $(document.documentElement).removeClass("is-clipped"))
                }
                $((function() {
                    $(".notification .delete").each((function() {
                        $(this).on("click", (function() {
                            $(this).parent().remove()
                        }))
                    })), $("#fix-match-input").change((function() {
                        $("input[name='kitsu_id']").val($(this).val())
                    })), $("#all-shows-link").on("click", (function() {
                        $(".column.is-hidden").removeClass("is-hidden"), $("#back-to-top-link").removeClass("is-hidden"), $(this).remove()
                    })), $("#back-to-top-link").on("click", (function() {
                        $("html, body").animate({
                            scrollTop: 0
                        }, "slow")
                    }))
                })), window.displayShowInfo = displayShowInfo, window.openAddShowModal = openAddShowModal, window.openEditShowModal = openEditShowModal, window.openDeleteShowModal = openDeleteShowModal, window.closeModals = closeModals, window.toggleFixMatchDropdown = toggleFixMatchDropdown, window.displayShowEntries = displayShowEntries, window.displayShowWebhooks = displayShowWebhooks
            }
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        if (__webpack_module_cache__[e]) return __webpack_module_cache__[e].exports;
        var o = __webpack_module_cache__[e] = {
            id: e,
            exports: {}
        };
        return __webpack_modules__[e](o, o.exports, __webpack_require__), o.exports
    }
    __webpack_require__.n = e => {
        var o = e && e.__esModule ? () => e.default : () => e;
        return __webpack_require__.d(o, {
            a: o
        }), o
    }, __webpack_require__.d = (e, o) => {
        for (var t in o) __webpack_require__.o(o, t) && !__webpack_require__.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: o[t]
        })
    }, __webpack_require__.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o), __webpack_require__.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, __webpack_require__(561)
})();