var fs = require('fs')
var slides = require('./slides').slides;

var colors = {
	red: { start: '\033[1;4;31m', end: '\033[0m'},
	green: { start: '\033[1;4;32m', end: '\033[0m'}
};

// https://en.wikipedia.org/wiki/ANSI_escape_code#graphics
// NONE='\033[00m'
// RED='\033[01;31m'
// GREEN='\033[01;32m'
// YELLOW='\033[01;33m'
// PURPLE='\033[01;35m'
// CYAN='\033[01;36m'
// WHITE='\033[01;37m'
// BOLD='\033[1m'
// UNDERLINE='\033[4m'

var print = function (text) {
	console.log('\033c');
	for (color in colors) {
		var startTag = '<' + color + '>';
		var endTag = '</' + color + '>';
		text = text.replace(new RegExp(startTag, 'g'), colors[color].start);
		text = text.replace(new RegExp(endTag, 'g'), colors[color].end);
	}
	console.log(text);
	console.log('\n\n\n\n\n\n\n\n\n');
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