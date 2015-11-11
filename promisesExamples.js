'use strict';
var Q = require('q');


function getPromise(info) {
    return Q(info || 'inputPromise fulfilled');
}

function getPromiseRejected(reason) {
    return Q.reject(reason || 'inputPromise rejected');
}













/* Se retornar um valor em um handler, a promessa de fora será cumprida com o valor retornado, 
ou seja, o valor é passado para a próxima promessa. */
function encadeamento1() {
    getPromise()
    .then(function() {
        console.log('Irei retornar um valor');
        return 'Javascript';
    }).then(function(value) {
        console.log('Valor do parâmetro:', value);
        return 'Promises';
    }).then(function(value) {
        console.log('Valor do parâmetro:', value);
        return 'Javascript + Promises';
    });
}

// encadeamento1();













/* Se retornar um valor em um handler, a promessa de fora será cumprida com o valor retornado. */
function encadeamento2() {
    var promise2 = encadeamento1();
    promise2.then(function(value) {
        console.log('Valor do parâmetro encadeamento:', value);
    });
}

// encadeamento2();















/* Se a promessa for cumprida e não houver handler, o valor irá para a próxima promessa. */
function encadeamento3() {
    getPromise('Retornar isso.')
    .then()
    .then(function(value) {
        console.log('Valor que chegou aqui:', value);
    });
}

// encadeamento3();















/* Se uma promessa for rejeitada, as promessas seguintes serão rejeitadas e catch será executado. */
function rejeicao1() {
    getPromiseRejected()
    .then(function() {
        console.log('1');
    }).then(function() {
        console.log('2');
    }).catch(function(reason) {
        console.log('Exceção capturada. Razão:', reason);
    });
}

// rejeicao1();












/* Se lançar uma exceção em um handler, as próximas promessas não serão executadas, e o catch irá capturar a exceção. */
function excecao1() {
    getPromise()
    .then(function() {
        console.log('1');
    }).then(function() {
        console.log('2');
        throw 'Aconteceu um erro. Causa desconhecida.';
    }).then(function() {
        console.log('3');
    }).then(function() {
        console.log('4');
    }).catch(function(reason) {
        console.log('Promessa rejeitada, razão: ', reason);
    });
}

// excecao1();















/* Se lançar uma exceção em um handler e ninguém capturá-la, a exceção é suprimida. */
function excecao2() {
    getPromise()
    .then(function() {
        console.log('1');
    }).then(function() {
        console.log('2');
        throw 'Aconteceu um erro. Causa desconhecida.';
    }).then(function() {
        console.log('3');
    }).then(function() {
        console.log('4');
    });
}

// excecao2();
















/* Chamar .done() para relançar a exceção caso ninguém a capture. */
function excecao3() {
    getPromise('promiseA fulfilled')
    .then(function(input) {
        throw 'Uma exceção foi lançada!';
    }).done();
}

// excecao3();

















/* O primeiro catch na cadeia será executado. */
function excecao4() {
    var promise = getPromise()
    .then(function() {
        console.log('1');
    }).then(function() {
        console.log('2');
        throw 'Aconteceu um erro. Causa desconhecida.';
    }).then(function() {
        console.log('3');
    }).then(function() {
        console.log('4');
    });

    promise.catch(function(reason) {
        console.log('Promessa rejeitada, razão: ' + reason);
    });
}

// excecao4();




















/* return foo(initialVal).then(bar).then(baz).then(qux); */
function encadeamento4() {
    var getPromise1 = function() {
        return getPromise('1').then(function(info) {
            console.log(info);
            return getPromise('2').then(console.log);
        });
    };

    var getPromise2 = function() {
        return getPromise('3').then(console.log);
    };

    var getPromise3 = function() {
        return getPromise('4').then(function(info) {
            console.log(info);
            return getPromise('5').then(function(info) {
                console.log(info);
                return getPromise('6').then(console.log);
            });
        });
    };

    getPromise1().then(getPromise2).then(getPromise3);
}

// encadeamento4();
























/* Promises also have a finally function that is like a finally clause. */
function finally1() {
    getPromiseRejected()
        .then(function() {
            console.log('1');
        }).then(function() {
            console.log('2');
        }).finally(function() {
            console.log('executando finally...');
        });
}

// finally1();


















/* Agora embolou o meio campo! */
function enbolouOMeioCampo() {

    getPromiseRejected('0 rejected')
        .then(function(reason) {
            console.log('1');
        }).then(function(info) {
            console.log('2');
        }).catch(function(reason) {
            console.log(reason);
            return getPromise('3 fulfilled')
                .then(function() {
                    return getPromiseRejected('4 rejected');
                });
        }).catch(function(reason) {
            console.log(reason);
        }).finally(function() {
            console.log('finally foi chamado!');
        });
}

// enbolouOMeioCampo();










// Fazer um Q.all
















/* Adiamento (deferred). Para criar uma promessa. */
function deferred() {

    var deferredPromise = function () {
        var deferred = Q.defer();

        getPromise().then(function() {
            getPromise().then(function() {
                deferred.resolve('um valor qualquer');
            });
        });
        
        return deferred.promise;
    };

    deferredPromise().then(function(info) {
        console.log('Promessa cumprida. Info: ' + info);
    });
}

deferred();