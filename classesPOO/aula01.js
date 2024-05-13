class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`${this.nome} esta falando`)
    }

    comer(){
        console.log(`${this.nome} esta comendo`)
    }
}
// no caso das classses os metodos criados dentro da classe já são direcionados ao prototype, poupando recursos
// as classes são como as contructors functions , mas com a otimização
const pessoa = new Pessoa('gui', 'lima')
console.log(pessoa)
