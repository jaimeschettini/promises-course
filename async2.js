var async = require('./asyncOperations');

var user;

async.getUser('bob esponja', function(value) {
	user = value;
});

console.log(user);

var tweets = async.getTweetsFor(user);1
console.log(tweets);

// Qual o resultado?
// Como corrigir?
