(function () {

    "use strict";

    var listeners = {};

    /**
     * Event emitter
     *
     * @param {String} type
     */
    var emit = function (type) {
        if (typeof listeners[type] !== "undefined") {
            Array.prototype.shift.apply(arguments);
            for (var i = 0; i < listeners[type].length; i++) {
                listeners[type][i].apply(null, arguments);
            }
        }
    };

    /**
     * On event
     *
     * @param {String} type
     * @param {Function} fn
     */
    var on = function (type, fn) {
        if (typeof listeners[type] === "undefined") {
            listeners[type] = [];
        }

        if (listeners[type].indexOf(fn) < 0) {
            listeners[type].push(fn);
        }
    };

    module.exports = {
        "emit": emit,
        "on": on
    };

}());
