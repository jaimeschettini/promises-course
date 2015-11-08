// Síncrono
var user = getUser('bob esponja');
var tweets = getNewTweets(user);
updateTimeline(tweets);

// Usando callbacks
getUser('bob esponja', function(user) {
	getNewTweets(user, function(tweets) {
		updateTimeline(tweets);
	})
});

// Usando promises
getUser('bob esponja')
	.then(getNewTweets)
	.then(updateTimeline);
