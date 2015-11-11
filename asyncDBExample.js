function getUser () {
	var sql = 'SELECT * FROM users WHERE name=?';
	var user = query(sql, name); // <-- bloqueante
	if (!user) throw new Error('no user!');
	return user;
}

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

