console.log('\033c');
[
	'sync', 
	'async', 
	'callback', 
	'async2', 
	'async3', 
	'callbackHell', 
	'callbackHellWithError', 
	'callbackProblemNoThrow', 
	'callbackProblemNoThrowCorrect',
	'callbackProblemNoReturn'
].forEach(function(o, i) {
	console.log(++i, o);
});
