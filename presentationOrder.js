console.log('\033c');
[
	'sync', 
	'async', 
	'callback', 
	'callbackHell', 
	'callbackHellWithError', 
	'callbackHellTryCatch', 
	'callbackHellTryCatchCorrect'
].forEach(function(o, i) {
	console.log(++i, o);
});
