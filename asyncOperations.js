module.exports = {
	operation: function (value) {
		setTimeout(function () {
			console.log(value);
		}, Math.random() * 100);
	},
	getUser: function (name, callback) {
		setTimeout(function () {
			callback({ name: name });
		}, Math.random() * 100);
	},
	getTweetsFor: function (user, callback) {
		setTimeout(function () {
			if (!user) throw new Error("User is undefined!");
			callback(['Nada vale mais do que uma amizade idiota!', 'Este plano não pode falhar – eu vou roubar a fórmula do Hambúrguer de Siri” ']);
		}, Math.random() * 100);
	}
};