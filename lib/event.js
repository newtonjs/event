// Generated by CoffeeScript 1.4.0
(function() {
  'use strict';

  var event, listeners,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  event = {};

  listeners = {};

  event.emit = function() {
    var listener, params, type, _i, _len, _ref, _results;
    type = arguments[0], params = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (listeners[type] != null) {
      _ref = listeners[type];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        listener = _ref[_i];
        _results.push(listener.apply(null, params));
      }
      return _results;
    }
  };

  event.on = function(type, fn) {
    if (listeners[type] == null) {
      listeners[type] = [];
    }
    if (__indexOf.call(listeners[type], fn) < 0) {
      return listeners[type].push(fn);
    }
  };

  module.exports = event;

}).call(this);