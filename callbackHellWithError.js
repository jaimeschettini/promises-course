var async = require('./callbackOperations');

async.operation('operation 1', function (value) {
	console.log(value);
	async.operation('operation 2', function (value2) {
		console.log(value2);
		async.operation('operation 3', function (value3) {
			console.log(value3);
			// Como podemos capturar este erro?
			throw Error("Um erro aconteceu!");

			async.operation('operation 4', function (value4) {
				console.log(value4);
				async.operation('operation 5', function (value5) {
					console.log(value5);
					async.operation('operation 6', function (value6) {
						console.log(value6);
						async.operation('operation 7', function (value7) {
							console.log(value7);
						});
					});
				});
			});
		});
	});
});

// Callback hell ou pyramid of doom