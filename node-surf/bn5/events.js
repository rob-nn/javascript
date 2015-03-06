var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('foo', function (arg1, arg2){
	console.log('Foo raised, Args: ' , arg1, arg2);
	}
);
emitter.on('foo', function (arg1, arg2){
	console.log('Listener 2');
});

emitter.emit('foo', {a:123}, {b:456});
