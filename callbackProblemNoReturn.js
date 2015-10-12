var getUser = function (name) {
	var user = query("select * from User where name = ?", name); // <- Bloqueante
	return user;
};

var getUser = function (name) {
	query("select * from User where name = ?", name, function(error, user) {
		// Ninguém irá receber este retorno!
		return user;
	});
};