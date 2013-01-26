# newtonjs/event #

Really basic event dispatching. Nothing fancy.

**Version:** *0.2.0*<br/>
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


### Contributing ###

We accept contributions to the source via Pull Request, but you must run the tests
and compile the JavaScript before it will be considered for merge.
The source for this library is written in CoffeeScript, but it is distributed with
the compiled JavaScript.

```bash
$ npm test                # Run tests
$ npm run-script compile  # Compile JavaScript
```



### Licence ###
The content of this library is released under the **MIT License** by **Andrew Lawson**.<br/>
You can find a copy of this license at http://www.opensource.org/licenses/mit


<!-- Links -->
[travis]: https://travis-ci.org/newtonjs/event
[travis-status]: https://travis-ci.org/newtonjs/event.png?branch=master