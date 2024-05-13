// function criaPessoa(nome, sobrenome){
//     const pessoaPrototype = {
//         falar(){
//             console.log(`${this.nome} esta falando`)
//         },
//         comer(){
//             console.log(`${this.nome} esta comendo`)
//         },
//         beber(){
//             console.log(`${this.nome} esta bebendo`)
//         }
//     }
//     return Object.create(pessoaPrototype, {
//         nome: {value: nome},
//         sobrenome: {value: sobrenome}

//     })
// }


const falar = {
    falar(){
        console.log(`${this.nome} esta falando`)
      }
};

const comer = {
    comer(){
        console.log(`${this.nome} esta comendo`)
      }
};

const beber = {
    beber(){
        console.log(`${this.nome} esta bebendo`)
      }
}

const pessoaPrototype = Object.assing({}, falar, comer, beber);
function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}
const p1 = criaPessoa('gui', 'lima')
p1.falar()
p1.comer()
p1.beber()