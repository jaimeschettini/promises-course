module.exports = {
	operation: function (value) {
		setTimeout(function () {
			console.log(value);
		}, Math.random() * 100);
	}
};