// Exemplos retirados da apresentação Redemption from callback hell: https://www.youtube.com/watch?v=hf1T_AONQJU&feature=youtu.be


/*
Estados de uma promessa:
 - Pendente (estado inicial)
 - Cumprida (fullfiled)
 - Rejeitada (rejected)
*/

getUser('bob esponja').then(onFullfiled, onRejected);























getUser('bob esponja', function (error, user) {
	// ...
});

// se transforma em:

getUser('bob esponja').then(function (user) {
	// promessa cumprida
}, function (error) {
	// promessa rejeitada
});
























// Versão mais legível: açúcar síntático!
getUser('bob esponja')
	.then(function (user) {
		// promessa cumprida
	})
	.catch(function (error) {
		// promessa rejeitada
	});


















var user = getUser('bob esponja');
return user.name;

// se transforma em:

getUser('bob esponja').then(function (user) {
	return user.name;
});


















var user = getUser('bob esponja');
if (!user) {
	throw new Error('no user!');
}
return user.name;

// se transforma em:

getUser('bob esponja').then(function (user) {
	if (!user) {
		throw new Error('no user!');
	}
	return user.name;
});

















try {
	deliverTweetTo(tweet, 'bob esponja');
} catch (error) {
	handleError(error);
}

// se transforma em:

deliverTweetTo(tweet, 'bob esponja')
	.catch(handleError);












try {
	var user = getUser('bob esponja');
	var tweets = getNewTweets(user);
	updateTimeline(tweets);
} catch (error) {
	handleError(error);
}

// se transforma em:

getUser('bob esponja')
	.then(function(user) {
		
		getNewTweets(user);
	})
	.then(updateTimeline)
	.catch(handleError);



