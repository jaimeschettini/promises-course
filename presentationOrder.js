console.log('\033c');
[
	'sync',
	'syncDBExample',
	'async', 
	'callback', 
	'async2', 
	'async3',
	'asyncDBExample',
	'callbackHell', 
	'callbackHellWithError', 
	'callbackProblemNoThrow', 
	'callbackProblemNoThrowCorrect',
	'callbackProblemNoReturn',
	'promises1',
	'promises2'
].forEach(function(o, i) {
	console.log(++i, o);
});
