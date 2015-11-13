// Síncrono
function getUser () {
	var sql = 'SELECT * FROM users WHERE name=?';
	var user = query(sql, name); // <-- bloqueante
	if (!user) throw new Error('no user!');
	return user;
}

// Assíncrono
function getUser(name, callback) {
	var sql = 'SELECT * FROM users WHERE name=?';
	query(sql, name, function (error, user) {
		if (error) {
			callback(error);
		} else if (!user) {
			callback(new Error('no user!'));
		} else {
			callback(null, user);
		}
	});
}

