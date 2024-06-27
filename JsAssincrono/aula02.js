
//metodos uteis para as promises
function rand(min, max) {
    min *= 1000,
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}


function e1(msg, tempo){
return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') {
        reject(new Error('BAD VALUE'));
    return;
    }
    setTimeout(() => {
    resolve(msg.toUpperCase());
    }, tempo)
})
}


const promises = [
    e1('Promise 1', rand(1, 3)),
    'valor',
    e1('Promise 2', rand(1, 3)),
    //e1(1000 , rand(1, 3)),
    'outro valor'
]

Promise.all(promises).then(values => { // se existir alguma promessa 'errada' ele vai rejeitar todas
    console.log(values)
}).catch(e => console.log(e))


//Promise.race(promises) ele vai apresentar a primeira que for concluida
//Promise.reject vai me retoranar a promessa rejeitada
// Promise.resolve vai me retornar a promessa resolvida