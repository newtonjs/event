'use strict'

{assert} = require 'chai'
{spy}    = require 'sinon'

path = '../src/event'
event = require path

suite 'event:', ->

  suite 'emit:', ->
    foo = bar = baz = null

    setup ->
      foo = spy()
      bar = spy()
      baz = spy()
      event.on 'foo', foo
      event.on 'foo', bar
      event.on 'baz', baz

    test 'Emitting subscribed event calls subscribers', ->
      event.emit('foo');
      assert.isTrue(foo.calledOnce);
      assert.isTrue(bar.calledOnce);
      assert.isFalse(baz.calledOnce);

    test 'Emitting unsubscribed event calls nothing', ->
      event.emit('bar');
      assert.isFalse(foo.calledOnce);
      assert.isFalse(bar.calledOnce);
      assert.isFalse(baz.calledOnce);

    test 'Emitting event with argument calls subscribers with argument', ->
      arg1 = {};
      event.emit('foo', arg1);
      assert.isTrue(foo.calledWith(arg1));
      assert.isTrue(bar.calledWith(arg1));
      assert.isFalse(baz.calledWith(arg1));

    test 'Emitting event with arguments calls subscribers with arguments', ->
      arg1 = {};
      arg2 = {};
      event.emit('foo', arg1, arg2);
      assert.isTrue(foo.calledWith(arg1, arg2));
      assert.isTrue(bar.calledWith(arg1, arg2));
      assert.isFalse(baz.calledWith(arg1, arg2));

  suite 'scope:', ->
    onEvent = require(path).on
    foo = null

    setup ->
      foo = spy()
      onEvent('foo', foo)

    test 'Emitting subscribed event calls subscribers', ->
      event.emit('foo')
      assert.isTrue(foo.calledOnce)
