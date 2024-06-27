function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


function e1(msg, tempo){
return new Promise((resolve, reject) => {
setTimeout(() => {
        if(typeof msg !== 'string') {
            reject(new Error('BAD VALUE'))
            return;}
    resolve(msg.toUpperCase());
    }, tempo)
})
}

async function executa(){
 try {
    const msg = await e1('Promise 1', rand(1, 3))
    console.log(msg)
    const msg2 = await e1('Promise 2', rand(1, 3))
    console.log(msg2)
    const msg3 = await e1('Promise 3', rand(1, 3))
    console.log(msg3)
 } catch (error) {
    console.log(error)
 }   
}

executa();

const teste = e1('Promise 1', 5000);
console.log(teste)
// neste caso a promise vai ficar pendente, pois não teve tempo de terminar de ser executada
