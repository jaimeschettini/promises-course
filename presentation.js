fs = require('fs')

var slides = [
	'Uma <b>promessa</b> é um objeto que representa um valor que ainda não está disponível porque a função que produzirá o valor ainda não terminou. Esse valor pode ser um valor normal (objeto, número, string etc) ou uma exceção que uma função pode lançar no futuro. A promessa é onde o resultado irá se materializar, quando ele estiver pronto.',
	'É um conceito antigo, de 1976/77.'
];

var print = function (text) {
	console.log('\033c');
	console.log(text.replace('<b>', '\033[1;4;31m').replace('</b>', '\033[0m\n'));
	console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
};

var start = function () {
	print(slides[0]);
	saveSlide(0);
};

var currentSlide = function (fn) {
	fs.readFile('./currentSlide', 'utf8', function (err, data) {
		if (err) {
			return console.log(err);
		}
		fn(data);
	});
};

var saveSlide = function (newSlideIndex) {
	fs.writeFile("./currentSlide", newSlideIndex, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	}); 
}

var nextSlide = function () {
	currentSlide(function(i) {
		i++; 
		print(slides[i]);
		saveSlide(i);
	});
};

var prevSlide = function () {
	currentSlide(function(i) {
		i--;
		print(slides[i]);
		saveSlide(i);
	});
};

module.exports = {
	start: start,
	prevSlide: prevSlide,
	nextSlide: nextSlide,
	currentSlide: currentSlide
};