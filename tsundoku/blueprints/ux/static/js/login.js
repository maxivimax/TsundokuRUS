(() => {
    "use strict";
    var e = {
            48: (e, t) => {
                window.launchModal = function() {
                    document.getElementById("help-modal").classList.add("is-active"), document.documentElement.classList.add("is-clipped")
                }, window.closeModal = function() {
                    document.getElementById("help-modal").classList.remove("is-active"), document.documentElement.classList.remove("is-clipped")
                }
            }
        },
        t = {};
    ! function s(o) {
        if (t[o]) return t[o].exports;
        var n = t[o] = {
            exports: {}
        };
        return e[o](n, n.exports, s), n.exports
    }(48)
})();