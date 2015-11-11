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
	'promisesTransforms',
	'promisesExamples'
].forEach(function(o, i) {
	console.log(++i, o);
});
