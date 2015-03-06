var EventEmitter = require('events').EventEmitter;

var emiter = new EventEmitter();

emiter.on('foo', function a(){});
emiter.on('foo', function b(){});

console.log(emiter.listeners('foo'));

