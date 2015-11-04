module.exports = {
	slides: [
		'Programação assíncrona, callbacks e promessas.',
		'Uma <red>promessa</red> é um objeto que representa um valor que ainda não está disponível porque a função que produzirá o valor ainda não terminou. Esse objeto terá um valor <red>no futuro</red>.',
		'Esse valor pode ser um objeto, número, string etc, ou uma exceção que uma função pode lançar no futuro.',
		'Mas por que precisamos de promessas?',
		'Vamos rebobinar a fita...',
		'<red>Nodejs</red>\n\nFunciona bem nos cenários que usam muito I/O. Não funciona bem para cenários de computação pesada.\n\nUsa muito operações assíncronas.',
		'O que são operações síncronas?',
		'O que são operações assíncronas?',
		'O que é um callback?',
		'Te imagina com 16 anos, jogando videogame amarradão. Aí tu ficas brocado*. O que tu fazes?\n\n\n\n* <red>Bate aquela fome</red>',
		'- "Mããããe, faz um misto quente pra mim?!',
		'...e continua jogando videogame.',
	    'javascript event loop (usar loup)',
		
		'Callbacks',
		'Problemas com o callback',
		'Callback hell/piramid of doom',
		'E se o callback lançar um erro?'
		'No throw',
		'No return',

		'<red>Promises</red>',
		'Uma <red>promessa</red> é um objeto que representa um valor que ainda não está disponível porque a função que produzirá o valor ainda não terminou. Esse objeto terá um valor <red>no futuro</red>.',
		'Esse valor pode ser um objeto, número, string etc, ou uma exceção que uma função pode lançar no futuro.',
		'Promises/A+ Spec (promisesaplus.com)',
		'then',
		'then.catch/fail/otherwise',
		'Encadeamento - then.then.then',
		'O que acontece se eu lançar uma exceção dentro de uma promise?',	
		'Erros communs: http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html',
		
		'Nodejs',
		'Benchmark at PayPal - https://www.paypal-engineering.com/2013/11/22/node-js-at-paypal/',
		
		'Desafio para o Palatino:',
		'- Garantir que não existe nenhuma exceção suprimida (todas as promises devem ter catch ou estar aninhadas e capturar as exceções dos códigos síncronos)',
		
		'Referências:',
		'https://promisesaplus.com/'
		'http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D',
		'http://know.cujojs.com/tutorials/async/mastering-async-error-handling-with-promises.html.md',

		'Redemption form callback hell: https://www.youtube.com/watch?v=hf1T_AONQJU&feature=youtu.be',
		'https://blog.domenic.me/youre-missing-the-point-of-promises/',
		'http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html',
		'https://gist.github.com/jpsoroulas/62668ade41e981a4d7a5',
		'https://www.promisejs.org/implementing/',
	]
};