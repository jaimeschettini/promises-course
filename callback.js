var async = require('./callbackOperations');

async.operation('operation 1', function (value) {
	console.log(value);
	throw new Error();
	async.operation('operation 2', function (value2) {
		console.log(value2);
		async.operation('operation 3', function (value3) {
			console.log(value3);
		});
	});
});

// Qual o resultado?