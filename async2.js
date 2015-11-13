var async = require('./asyncOperations');

var user;
var tweets;

async.getUser('bob esponja', function(value) {
	user = value;
	console.log('user:', user);
	async.getTweetsFor(user, function (value) {
		tweets = value;
		console.log('tweets:', tweets);
	});
});





// Qual o resultado?
// Como corrigir?
