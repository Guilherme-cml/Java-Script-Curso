//promises

function rand(min, max) {
    min *= 1000,
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}


function e1(msg, tempo){
return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(new Error('BAD VALUE'));
    setTimeout(() => {
    resolve(msg);
    }, tempo)
})
}


e1('F1', rand(1, 3)).then(r => {
    console.log(r);
    return e1(123 , rand(1, 3))
    }).then(r => {
        console.log(r);
    }).catch(e => console.log(e))


    console.log('isso vai ser executado antes de tudo')

