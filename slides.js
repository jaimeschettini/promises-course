module.exports = {
	slides: [
		'Programação assíncrona, callbacks e promessas.',
		'Uma <red>promessa</red> é um objeto que representa um valor que ainda não está disponível porque a função que produzirá o valor ainda não terminou. Esse objeto terá um valor <red>no futuro</red>.',
		'Esse valor pode ser um objeto, número, string etc, ou uma exceção que uma função pode lançar no futuro.',
		'Mas por que precisamos de promessas?',
		'Vamos rebobinar a fita...',
		'<red>Nodejs</red>\n\nFunciona bem nos cenários que usam muito I/O. Não funciona bem para cenários de computação pesada.\n\nUsa muito operações assíncronas.\n\nBenchmark at PayPal - https://www.paypal-engineering.com/2013/11/22/node-js-at-paypal/',
		'O que são operações síncronas?\n\n\nnode sync.js\nnode syncDBExample.js',
		'O que são operações assíncronas?\n\n\nnode async.js',

		'Callbacks. Mas o que é um callback?',
		'Te imagina com 16 anos, jogando videogame amarradão. Aí tu ficas brocado. O que tu fazes?',
		'- "Mããããe, faz um misto quente pra mim?!',
		'...e continua jogando videogame.',
		'Quando o misto estiver pronto, tu paras de jogar e vai comer.',
	    'javascript event loop: 1 thread rodando a tua aplicação e outras threads fazendo trabalhos que demoram (http, DOM, acesso a banco de dados)',
		
		'Callbacks\n\nnode callback.js\nnode async2.js\nnode async3.js\nnode asyncDBExample.js',
		'Problemas com o callback:\n\n- Callback hell/piramid of doom\n- Sem throw\n- Sem return\n- Quantas vezes o meu callback será chamado? Ele pode não ser chamado?\n- O argumento de erro é o primeiro ou segundo?',

		'<red>Promises</red>\n\nUma <red>promessa</red> é um objeto que representa um valor que ainda não está disponível porque a função que produzirá o valor ainda não terminou. Esse objeto terá um valor <red>no futuro</red>.\n\nEsse valor pode ser um objeto, número, string etc, ou uma exceção que uma função pode lançar no futuro.',
		'Promises\n\n- then\n- then.catch/fail/otherwise\n- then.then.then (encadeamento)\n- Implementações: https://promisesaplus.com/implementations\n- Exemplos',
		
		'Referências:\n\n- Promises/A+ Spec (promisesaplus.com)\n- http://know.cujojs.com/tutorials/async/mastering-async-error-handling-with-promises.html.md\n- Redemption form callback hell: https://www.youtube.com/watch?v=hf1T_AONQJU&feature=youtu.be\n- https://blog.domenic.me/youre-missing-the-point-of-promises/\n- http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html\n- https://gist.github.com/jpsoroulas/62668ade41e981a4d7a5',
	]
};