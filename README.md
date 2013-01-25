# newtonjs/event #

Really basic event dispatching. Nothing fancy.

**Version:** *0.1.0*<br/>
**Build status:** [![Build Status][travis-status]][travis]


### Usage ###

```js
var event = require('newtonjs-event');

event.on('ping', function(response) {
  if (response) {
    console.log(response);
  } else {
    console.log('pong');
  }
});

event.emit('ping'); // pong
event.emit('ping', 'pang'); // pang
```


### Installation ###

This library isn't available from the NPM repository or any other
package manager, but you can still add it to your `package.json`

```json
{
  "dependencies": {
    "newtonjs-event": "git://github.com/newtonjs/event.git#master"
  }
}
```

### Licence ###
The content of this library is released under the **MIT License** by **Andrew Lawson**.<br/>
You can find a copy of this license at http://www.opensource.org/licenses/mit


<!-- Links -->
[travis]: https://travis-ci.org/newtonjs/event
[travis-status]: https://secure.travis-ci.org/newtonjs/event.png?branch=0.2.x