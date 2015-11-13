module.exports = {
	slides: [
		'Programação assíncrona, callbacks e promessas.',
		'Uma <green>promessa</red> é um objeto que representa um valor que ainda não está disponível porque a função que produzirá o valor ainda não terminou. Esse objeto terá um valor <green>no futuro</red>.\n\nEsse valor pode ser um objeto, número, string etc, ou uma exceção que uma função pode lançar no futuro.',
		'Mas por que precisamos de promessas?',
		'<green>Nodejs</red>\n\n- Funciona bem nos cenários que usam muito I/O e conexões concorrentes. Não funciona bem para cenários de computação pesada.\n\nBenchmark at PayPal - https://www.paypal-engineering.com/2013/11/22/node-js-at-paypal/\n      - Construído quase 2x mais rápido com menos pessoas\n      - Escrito com 33% menos linhas de código\n      - Construído com 40% menos arquivos\n\n- Usa, naturalmente, muito operações assíncronas (http, banco).',
		'O que são operações síncronas?\n\n\n\n\nnode sync.js\nnode syncDBExample.js',
		'O que são operações assíncronas?\n\n\n\n\nnode async.js',

		'...com callbacks. Mas o que é um callback?',
		'Te imagina com 16 anos, jogando videogame amarradão. Aí tu ficas brocado. O que tu fazes?',
		'- "Mããããe, faz um misto quente pra mim?!"',
		'...e continua jogando videogame.',
		'Quando o misto estiver pronto, a tua mãe te traz e tu paras de jogar para comer.',
		
		'Callbacks: geralmente usado para realizar operações assíncronas.\n\nnode callback.js\nnode async2.js\nnode async3.js\nnode asyncDBExample.js',
		'Problemas com o callback:\n\n- Callback hell/piramid of doom\n- Sem throw\n- Sem return\n- Quantas vezes o meu callback será chamado? Ele pode não ser chamado?\n- O argumento de erro é o primeiro ou segundo?\n\ncallbackHell.js\ncallbackHellWithError.js\ncallbackProblemNoThrow.js\ncallbackProblemNoThrowCorrect.js\ncallbackProblemNoReturn.js',

		'<green>Promises</red>\n\nUma <green>promessa</red> é um objeto que representa um valor que ainda não está disponível porque a função que produzirá o valor ainda não terminou. Esse objeto terá um valor <green>no futuro</red>.\n\nEspecificação: Promises/A+ Spec (promisesaplus.com)',
		'Aprender através de exemplos: \npromises1.js\npromises2.js',
		'Referências:\n\n- Promises/A+ Spec (promisesaplus.com)\n- Implementações: https://promisesaplus.com/implementations\n- Redemption form callback hell: https://www.youtube.com/watch?v=hf1T_AONQJU&feature=youtu.be\n- http://know.cujojs.com/tutorials/async/mastering-async-error-handling-with-promises.html.md\n- https://blog.domenic.me/youre-missing-the-point-of-promises/\n- http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html\n- Exemplos: https://gist.github.com/jpsoroulas/62668ade41e981a4d7a5',
	]
};