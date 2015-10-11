module.exports = {
	operation: function (value, callback) {
		setTimeout(function () {
			callback(value);
		}, Math.random() * 100);
	}
};


