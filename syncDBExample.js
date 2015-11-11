function getUser () {
	var sql = 'SELECT * FROM users WHERE name=?';
	var user = query(sql, name); // <-- bloqueante
	if (!user) throw new Error('no user!');
	return user;
}