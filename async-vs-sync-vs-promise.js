var user = getUser('bob esponja');
var name = user.name;


getUser('bob esponja', function(user) {
	var name = user.name;
});


getUser('bob esponja').then(function(user) {
	var name = user.name;
	// return user.name?
});
