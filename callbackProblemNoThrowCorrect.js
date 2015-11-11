
function getUser(name, callback) {
	var sql = 'SELECT * FROM users WHERE name=?';
	query(sql, name, function (error, user) {
		if (error) {
			callback(error);  // --> Padrão para retornar erros no callback
		} else if (!user) {
			callback(new Error('no user!'));  // --> Padrão para retornar erros no callback
		} else {
			callback(null, user);
		}
	});
}



// Outro exemplo
// Síncrono:
try {
	var user = getUser('bob esponja');
	var tweets = getNewTweets(user);
	updateTimeline(tweets);
} catch (error) {
	handleError(error);
}


// Callback
getUser('bob esponja', function (error, user) {
	if (error) {
		handleError(error);
	} else {
		getNewTweets(user, function (error, tweets) {
			if (error) {
				handleError(error);
			} else {
				updateTimeline(tweets, function (error) {
					if (error) handleError(error);
				});
			}
		});
	}
});
