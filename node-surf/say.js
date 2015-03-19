function say(word){
	console.log(word);
}

function execute(someFunction, value){
	someFunction(value);
}

execute(say, 'Hi!');

execute(function (word){console.log(word);}, "Hello.");
