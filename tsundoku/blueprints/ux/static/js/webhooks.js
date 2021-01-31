(() => {
    "use strict";
    var e = {
            16: (e, t, n) => {
                n.d(t, {
                    Z: () => r
                });
                var o = n(645),
                    a = n.n(o)()((function(e) {
                        return e[1]
                    }));
                a.push([e.id, ".is-scrollable{overflow-y:auto}.dashboard{display:flex;flex-direction:row}.dashboard.is-full-height{height:100vh}.dashboard-panel{display:flex;flex-direction:column;padding:2rem 1.5rem;flex:0 0 25rem;height:100%}.dashboard-panel.left{flex:0 0 25rem}.dashboard-panel.right{flex:0 0 25rem}.dashboard-panel.has-thick-padding{padding:3rem 2rem}.dashboard-panel.is-one-quarter{flex:0 0 25%}.dashboard-panel.is-half{flex:0 0 50%}.dashboard-panel.is-one-third{flex:0 0 33.3333333333%}.dashboard-panel.is-small{flex:0 0 15rem}.dashboard-panel.is-medium{flex:0 0 20rem}.dashboard-panel.is-large{flex:0 0 30rem}.dashboard-panel-header.is-centered,.dashboard-panel-content.is-centered,.dashboard-panel-footer.is-centered{display:flex;justify-content:center}.dashboard-panel-header{margin-bottom:2rem}.dashboard-panel-main{flex:1}.dashboard-panel-footer{margin-top:2rem}.dashboard-main{display:flex;flex:1;display:flex;flex-direction:column;min-height:100vh}.dashboard-main .navbar.is-fixed-top{position:-webkit-sticky;position:sticky;top:0}.dashboard-main .footer{flex:1}\n", ""]);
                const r = a
            },
            645: e => {
                e.exports = function(e) {
                    var t = [];
                    return t.toString = function() {
                        return this.map((function(t) {
                            var n = e(t);
                            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                        })).join("")
                    }, t.i = function(e, n, o) {
                        "string" == typeof e && (e = [
                            [null, e, ""]
                        ]);
                        var a = {};
                        if (o)
                            for (var r = 0; r < this.length; r++) {
                                var i = this[r][0];
                                null != i && (a[i] = !0)
                            }
                        for (var d = 0; d < e.length; d++) {
                            var s = [].concat(e[d]);
                            o && a[s[0]] || (n && (s[2] ? s[2] = "".concat(n, " and ").concat(s[2]) : s[2] = n), t.push(s))
                        }
                    }, t
                }
            },
            312: (e, t, n) => {
                n.r(t), n.d(t, {
                    default: () => i
                });
                var o = n(379),
                    a = n.n(o),
                    r = n(16);
                a()(r.Z, {
                    insert: "head",
                    singleton: !1
                });
                const i = r.Z.locals || {}
            },
            379: (e, t, n) => {
                var o, a = function() {
                        var e = {};
                        return function(t) {
                            if (void 0 === e[t]) {
                                var n = document.querySelector(t);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                    n = n.contentDocument.head
                                } catch (e) {
                                    n = null
                                }
                                e[t] = n
                            }
                            return e[t]
                        }
                    }(),
                    r = [];

                function i(e) {
                    for (var t = -1, n = 0; n < r.length; n++)
                        if (r[n].identifier === e) {
                            t = n;
                            break
                        } return t
                }

                function d(e, t) {
                    for (var n = {}, o = [], a = 0; a < e.length; a++) {
                        var d = e[a],
                            s = t.base ? d[0] + t.base : d[0],
                            l = n[s] || 0,
                            c = "".concat(s, " ").concat(l);
                        n[s] = l + 1;
                        var u = i(c),
                            f = {
                                css: d[1],
                                media: d[2],
                                sourceMap: d[3]
                            }; - 1 !== u ? (r[u].references++, r[u].updater(f)) : r.push({
                            identifier: c,
                            updater: m(f, t),
                            references: 1
                        }), o.push(c)
                    }
                    return o
                }

                function s(e) {
                    var t = document.createElement("style"),
                        o = e.attributes || {};
                    if (void 0 === o.nonce) {
                        var r = n.nc;
                        r && (o.nonce = r)
                    }
                    if (Object.keys(o).forEach((function(e) {
                            t.setAttribute(e, o[e])
                        })), "function" == typeof e.insert) e.insert(t);
                    else {
                        var i = a(e.insert || "head");
                        if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        i.appendChild(t)
                    }
                    return t
                }
                var l, c = (l = [], function(e, t) {
                    return l[e] = t, l.filter(Boolean).join("\n")
                });

                function u(e, t, n, o) {
                    var a = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
                    if (e.styleSheet) e.styleSheet.cssText = c(t, a);
                    else {
                        var r = document.createTextNode(a),
                            i = e.childNodes;
                        i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(r, i[t]) : e.appendChild(r)
                    }
                }

                function f(e, t, n) {
                    var o = n.css,
                        a = n.media,
                        r = n.sourceMap;
                    if (a ? e.setAttribute("media", a) : e.removeAttribute("media"), r && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), e.styleSheet) e.styleSheet.cssText = o;
                    else {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(o))
                    }
                }
                var h = null,
                    p = 0;

                function m(e, t) {
                    var n, o, a;
                    if (t.singleton) {
                        var r = p++;
                        n = h || (h = s(t)), o = u.bind(null, n, r, !1), a = u.bind(null, n, r, !0)
                    } else n = s(t), o = f.bind(null, n, t), a = function() {
                        ! function(e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(n)
                    };
                    return o(e),
                        function(t) {
                            if (t) {
                                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                                o(e = t)
                            } else a()
                        }
                }
                e.exports = function(e, t) {
                    (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = (void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o));
                    var n = d(e = e || [], t);
                    return function(e) {
                        if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                            for (var o = 0; o < n.length; o++) {
                                var a = i(n[o]);
                                r[a].references--
                            }
                            for (var s = d(e, t), l = 0; l < n.length; l++) {
                                var c = i(n[l]);
                                0 === r[c].references && (r[c].updater(), r.splice(c, 1))
                            }
                            n = s
                        }
                    }
                }
            },
            988: (e, t, n) => {
                function o(e) {
                    e.preventDefault();
                    var t = $(this).closest("form").attr("action"),
                        n = $(this).closest("form").attr("method"),
                        o = $(this).closest("form").serialize();
                    $.ajax({
                        url: t,
                        type: n,
                        data: o,
                        success: function(e) {
                            location.reload()
                        },
                        error: function(e, t, n) {
                            alert("There was an error processing the request.")
                        }
                    })
                }
                n(312), $((function() {
                    $(".notification .delete").each((function() {
                        $(this).on("click", (function() {
                            $(this).parent().remove()
                        }))
                    }))
                })), window.openAddWebhookModal = function() {
                    var e = $("#add-webhook-form");
                    e.attr("action", "/api/v1/webhooks"), e.attr("method", "POST"), e.on("submit", o), $(document.documentElement).addClass("is-clipped"), $("#add-webhook-modal").addClass("is-active")
                }, window.openEditWebhookModal = function(e) {
                    var t = $("#edit-webhook-form");
                    t.trigger("reset"), $("#edit-webhook-form :input").each((function(t, n) {
                        $(n).attr("name"), $(n).val(e.name)
                    })), t.attr("method", "PUT"), t.attr("action", "/api/v1/webhooks/" + e.base_id), t.on("submit", o), $(document.documentElement).addClass("is-clipped"), $("#edit-webhook-modal").addClass("is-active")
                }, window.openDeleteWebhookModal = function(e) {
                    $("#delete-webhook-button").on("click", (function(t) {
                        t.preventDefault(), $.ajax({
                            url: "/api/v1/webhooks/" + e.base_id,
                            type: "DELETE",
                            success: function() {
                                location.reload()
                            }
                        })
                    })), $("#item-to-delete-name").text(e.name), $(document.documentElement).addClass("is-clipped"), $("#delete-webhook-modal").addClass("is-active")
                }, window.closeWebhookModals = function() {
                    $(".modal").removeClass("is-active"), $(document.documentElement).removeClass("is-clipped")
                }
            }
        },
        t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var a = t[o] = {
            id: o,
            exports: {}
        };
        return e[o](a, a.exports, n), a.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
            enumerable: !0,
            get: t[o]
        })
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n(988)
})();