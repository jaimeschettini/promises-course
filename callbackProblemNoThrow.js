var async = require('./callbackOperations');

try {
	async.operation('operation 1', function (value) {
		console.log(value);
		async.operation('operation 2', function (value2) {
			console.log(value2);
			async.operation('operation 3', function (value3) {
				console.log(value3);
				throw Error("Um erro aconteceu!");
				
				async.operation('operation 4', function (value4) {
					console.log(value4);
				});
			});
		});
	});
} catch (e) {
	console.log("Não priemos cânico, está tudo sob controle.");
}

// O que acontece aqui?
// Alguém pode explicar o fluxo desse script?