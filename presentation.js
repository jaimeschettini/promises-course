fs = require('fs')

var slides = [
	'Uma <b>promessa</b> é um objeto que representa um valor que ainda não está disponível porque a função que produzirá o valor ainda não terminou. Esse valor pode ser um valor normal (objeto, número, string etc) ou uma exceção que uma função pode lançar no futuro. A promessa é onde o resultado irá se materializar, quando ele estiver pronto.',
	'É um conceito antigo, de 1976/77.',
	'Operações síncronas',
	'Operações assíncronas',
	'O que é um callback?',
	'Te imagina com 16 anos, jogando videogame amarradão. Aí tu ficas brocado*. O que tu fazes?\n\n\n\n* <red>Bate aquela fome</red>',
	'- "Mããããe, faz um misto quente pra mim?!',
	'...e continua jogando videogame.',
	    'javascript event loop',
	'Callbacks',
	'Callback hell/piramid of doom',
	'Promises',
	'then',
	'then.catch/fail/otherwise',
	'Encadeamento - then.then.then',
	
	'Erros communs: http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html',
	
	'Nodejs',
	'Benchmark at PayPal - https://www.paypal-engineering.com/2013/11/22/node-js-at-paypal/',
	
	'Desafio para o Palatino:',
	'- Garantir que não existe nenhuma exceção suprimida (todas as promises devem ter catch ou estar aninhadas e capturar as exceções dos códigos síncronos)',
	
	'Referências:',
	'Callbacks problems: https://www.youtube.com/watch?v=hf1T_AONQJU&feature=youtu.be'
];

var colors = {
	red: { start: '\033[1;4;31m', end: '\033[0m\n'}
};

var print = function (text) {
	console.log('\033c');
	for (color in colors) {
		text = text.replace('<' + color + '>', colors[color].start);
		text = text.replace('</' + color + '>', colors[color].end);
	}
	console.log(text);
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