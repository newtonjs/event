(function () {

    "use strict";

    var assert = require('chai').assert
    var spy = require('sinon').spy

    var modulePath = '../src/event';

    suite('event:', function () {

        suite('emit:', function () {
            var foo, bar, baz, arg1, arg2;
            var event = require(modulePath);

            setup(function () {
                foo = spy();
                bar = spy();
                baz = spy();
                event.on('foo', foo);
                event.on('foo', bar);
                event.on('baz', baz);
            });

            test('Emitting subscribed event calls subscribers', function () {
                event.emit('foo');
                assert.isTrue(foo.calledOnce);
                assert.isTrue(bar.calledOnce);
                assert.isFalse(baz.calledOnce);
            });

            test('Emitting unsubscribed event calls nothing', function () {
                event.emit('bar');
                assert.isFalse(foo.calledOnce);
                assert.isFalse(bar.calledOnce);
                assert.isFalse(baz.calledOnce);
            });

            test('Emitting event with argument calls subscribers with argument', function () {
                arg1 = {};
                event.emit('foo', arg1);
                assert.isTrue(foo.calledWith(arg1));
                assert.isTrue(bar.calledWith(arg1));
                assert.isFalse(baz.calledWith(arg1));
            });

            test('Emitting event with arguments calls subscribers with arguments', function () {
                arg1 = {};
                arg2 = {};
                event.emit('foo', arg1, arg2);
                assert.isTrue(foo.calledWith(arg1, arg2));
                assert.isTrue(bar.calledWith(arg1, arg2));
                assert.isFalse(baz.calledWith(arg1, arg2));
            });

        });

        suite('persistance:', function () {
            var foo;
            var emit = require(modulePath).emit;
            var on = require(modulePath).on;

            setup(function () {
                foo = spy();
                on('foo', foo);
            });

            test('Emitting subscribed event calls subscribers', function () {
                emit('foo');
                assert.isTrue(foo.calledOnce);
            });
        });

    });

}());
