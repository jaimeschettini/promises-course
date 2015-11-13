var async = require('./asyncOperations');

async.getUser('bob esponja', function(user) {
	console.log('user:', user);
	async.getTweetsFor(user, function(tweets) {
		console.log('tweets:', tweets);
	});
});