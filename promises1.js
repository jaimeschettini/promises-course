'use strict';
var Q = require('q');


function getPromiseFulfilled(info) {
    return Q(info || 'inputPromise fulfilled');
}

function getPromiseRejected(reason) {
    return Q.reject(reason || 'inputPromise rejected');
}













/* Se retornar um valor em um handler, a promessa de fora será cumprida com o valor retornado, 
ou seja, o valor é passado para a próxima promessa. */
function encadeamento1() {
    // getPromiseFulfilled()
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
    getPromiseFulfilled('Retornar isso.')
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
    getPromiseFulfilled()
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
    getPromiseFulfilled()
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

















/* Se lançar uma exceção em um handler, a promessa será rejeitada. */
function excecao3() {
    var promise = getPromiseFulfilled()
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

// excecao3();










/*
Scenario 7
===========
Promises also have a finally function that is like a finally clause.
*/
function runScenario7() {
    console.log('Scenario 7 is running...');

    getPromiseRejected()
        .finally(
            function() {
                console.log('finally is called!');
            }
        );
}

// runScenario7();

/*
Console output:
---------------
finally is called!
*/

/*
Scenario 8
===========
Ending a promise chain makes sure that, if an error doesn’t get
handled before the end, it will get rethrown and reported.
*/
function runScenario8() {
    console.log('Scenario 8 is running...');

    getPromiseFulfilled('promiseA fulfilled') // promiseA
        .then( // promiseB
            function(input) {
                throw 'Exception at promiseA fulfillment handler';
            }
        ).done(); // If not ended the exception is swallowed
}

// runScenario8();

/*
Console output:
---------------
throw e;
                      ^
Exception at promiseA fulfillment handler
*/

/*
Scenario 9
===========
If you have a number of promise-producing functions that need
to be run sequentially, you can of course do so manually:
return foo(initialVal).then(bar).then(baz).then(qux);
*/
function runScenario9() {
    console.log('Scenario 9 is running...');

    var getPromise1 = function() {
        return getPromiseFulfilled('promiseA fulfilled') // promiseA
            .then( // promise B
                function(info) {
                    console.log(info);
                    return getPromiseFulfilled('promiseC fulfilled') // promiseC
                        .then( // promiseD
                            console.log
                        );
                }
            );
    };

    var getPromise2 = function() {
        return getPromiseRejected('promiseE rejected') // promiseE
            .fail( // promiseF
                console.log
            );
    };

    var getPromise3 = function() {
        return getPromiseFulfilled('promiseG fulfilled') // promiseG
            .then( // promise H
                function(info) {
                    console.log(info);
                    return getPromiseFulfilled('promiseI fulfilled') // promiseI
                        .then( // promiseJ
                            function(info) {
                                console.log(info);
                                return getPromiseFulfilled('promiseK fulfilled') // promiseK
                                    .then( // promiseL
                                        console.log
                                    );
                            }
                        );
                }
            );
    };

    getPromise1().then(getPromise2).then(getPromise3);
}

// runScenario9();

/*
Console output:
---------------
promiseA fulfilled
promiseC fulfilled
promiseE rejected
promiseG fulfilled
promiseI fulfilled
promiseK fulfilled
*/

/*
Scenario 10
===========
Complex scenario with error propagation
*/
function runScenario10() {
    console.log('Scenario 10 is running...');

    getPromiseRejected('promiseA rejected') // promiseA
        .then( // promiseB
            function(reason) {
                console.log('Unreachable code');
            } // rejection handler missing (scenario 4)
        ).then( // promiseC
            function(info) {
                console.log('Unreachable code');
            } // rejection handler missing (scenario 4)
        ).fail( // promiseD
            function(reason) { // finally, the promiseA rejection is handled at promiseC rejection handler
                console.log(reason);
                return getPromiseFulfilled('PromiseE fulfilled') // promiseD becomes promiseE
                    .then( // promise F
                        function() {
                            return getPromiseRejected('PromiseF rejected');
                        }
                    );
            }
        ).fail( // promiseG
            function(reason) { // promiseF rejection handler
                console.log(reason);
            }
        ).finally(
            function() {
                console.log('finally is called!');
            }
        );
}

// runScenario10();

/*
Console output:
---------------
Scenario 10 is running...
promiseA rejected
PromiseF rejected
finally is called!
*/

/*
Scenario 11
===========
Complex scenario ...
*/
function runScenario11() {
    console.log('Scenario 11 is running...');

    getPromiseFulfilled('promiseA fulfilled') // promiseA
        .then( // promiseB
            function(reason) {
                console.log(reason);
                return getPromiseFulfilled('PromiseC fulfilled'); // promiseB becomes that promise, promiseC

            }
        ).then( // promiseD
            function(info) {
                console.log(info);
                throw 'promiseD exception';
            }
        ).fail( // promiseE
            function(reason) { // the error raised at promiseC fulfillment handler, is handled at promiseD rejection handler
                console.log(reason);
                return getPromiseRejected('PromiseF rejected'); // promiseE becomes that promise, promiseF
            }
        ).fail( // promiseG
            function(reason) { // promiseF rejection handler
                console.log(reason);
            }
        ).finally(
            function() {
                console.log('finally is called!');
            }
        );
}

// runScenario11();

/*
Console output:
---------------
promiseA fulfilled
PromiseC fulfilled
promiseD exception
PromiseF rejected
finally is called!
*/

/*
Scenario 12
===========
Scenario with finally...
*/
function runScenario12() {
    console.log('Scenario 12 is running...');

    getPromiseFulfilled('promiseA fulfilled') // promiseA
        .then( // promiseB
            function(input) {
                return getPromiseRejected('promiseC rejected') // promiseB becomes that promise, promiseC
                    .finally( // the final handler is called in any case, either on promise rejection or fulfillment
                        function() {
                            console.log('PromiceC final handler, clean up resources');
                        }
                    );
            }
        ).fail( // promiseD
            function(reason) { // promiseC rejection handler
                console.log(reason);
            }
        );
}

// runScenario12();

/*
Console output:
---------------
PromiceC final handler, clean up resources
promiseC rejected
*/

/*
Scenario 13
===========
Scenario with delay
*/
function runScenario13() {
    console.log('Scenario 13 is running...');

    Q.delay(5000)
        .then(
            function(info) {
                return getPromiseFulfilled('promiseA fulfilled');
            }
        ).then(
            function(info) {
                console.info(info); // executed after 5 secs
            }
        );
}

// runScenario13();

/*
Console output:
---------------
Scenario 13 is running...
promiseA fulfilled
*/

/*
Scenario 14
===========
Scenario with timeout
*/
// returns a fulfilled promise with specific delay
function getPromiseFulfilledWithDelay(delay) {
    return Q.delay(delay)
        .then(
            function() {
                return getPromiseFulfilled();
            }
        );
}

function runScenario14() {
    console.log('Scenario 14 is running...');
    /* since the promise is not fulffiled within 2000 sesc,
      it is rejected */
    getPromiseFulfilledWithDelay(3000)
        .timeout(2000)
        .fail(
            function(err) {
                console.log(err);
            }
        );
}

// runScenario14();

/*
Console output:
---------------
Scenario 14 is running...
{ [Error: Timed out after 2000 ms] code: 'ETIMEDOUT' }
*/

/*
Scenario 15
===========
Scenario with deferred
*/
function runScenario15() {
    console.log('Scenario 15 is running...');

    function promiseD() {
        var deferred = Q.defer();
        getPromiseFulfilled() // promiseA
            .then( // promiseB
                function(info) {
                    return getPromiseRejected('PromiseC rejected') // promiseC
                        .fail(
                            function(reason) {
                                // promiseD is fulfilled when the promiseC is rejected
                                deferred.resolve(reason);
                            }
                        );
                }
            );
        return deferred.promise; // return the promise
    }

    promiseD()
        .then(
            function(info) {
                console.log('promiseD fulfilled, info: ' + info);
            }
        );
}

// runScenario15();

/*
Console output:
---------------
Scenario 15 is running...
promiseD fulfilled, info: PromiseC rejected
*/

/* 
Scenario 16
===========
Scenario with done()
Exceptions thrown by done will have long stack traces.
The Golden Rule of done vs. then usage is: either return your promise to someone else, 
or if the chain ends with you, call done to terminate it. 
*/

function runScenario16() {
    console.log('Scenario 16 is running...');

    //Lets define a node style synch method
    var nfun = function(cb) {
        // a async method
        process.nextTick(function() {
            cb(null, 'asynch result');
        });
    };

    var pfun = Q.denodeify(nfun);
    pfun().done(function(res) {
        console.log('res: ' + res);
        // The done() terminates the promise, in any case
        // the returned resolved promise is ignored
        return Q('Some other resolution');

        // But, the returned rejected promise throws an error with
        // the rejection reason. Uncomment the next line to test it
        // return Q.reject('Promise rejected');

        // Errors are not 'swallowed' silently. 
        // If then() is used instead of done() the error is 'swallowed'
        // Uncomment the next line to test it
        // throw 'This error is not swallowed';
    });
    // You can not continue the promise chain. Uncomment to get an error
    // .then(function(resolution) {
    //     console.log('resolution: ' + resolution);
    // });
}

// runScenario16();

/*
Console output:
---------------
--> return the resolved promise
Scenario 16 is running...
res: asynch result
--> return the rejected promise
Scenario 16 is running...
throw e;
                      ^
Promise rejected
*/
