// Exemplos retirados da apresentação Redemption from callback hell: https://www.youtube.com/watch?v=hf1T_AONQJU&feature=youtu.be

getUser('bob esponja', function (error, user) {
	// ...
});

// se transforma em:

getUser('bob esponja').then(function (user) {
	// ...
}, function (error) {
	// ...
});




















var user = getUser('bob esponja');
return user.name;

// se transforma em:

getUser('bob esponja').then(function (user) {
	return user.name;
});









var user = getUser('bob esponja');
if (!user) throw new Error('no user!');
return user.name;

// se transforma em:

getUser('bob esponja').then(function (user) {
	if (!user) throw new Error('no user!');
	return user.name;
});








try {
	deliverTweetTo(tweet, 'bob esponja');
} catch (error) {
	handleError(error);
}

// se transforma em:

deliverTweetTo(tweet, 'bob esponja')
	.then(undefined, handleError);












try {
	var user = getUser('bob esponja');
	var tweets = getNewTweets(user);
	updateTimeline(tweets);
} catch (error) {
	handleError(error);
}

// se transforma em:

getUser('bob esponja')
	.then(getNewTweets)
	.then(updateTimeline)
	.then(undefined, handleError);



