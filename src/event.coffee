'use strict'

event = {}
listeners = {}

# Emit event
#
# @param [String] type
event.emit = (type, params...) ->
    listener(params...) for listener in listeners[type] if listeners[type]?

# On event
#
# @param [String] type
# @param [Function] fn
event.on = (type, fn) ->
  listeners[type] = [] unless listeners[type]?
  listeners[type].push(fn) unless fn in listeners[type]

module.exports = event
