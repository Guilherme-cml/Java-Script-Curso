// revisão objetos

const pessoa = {
    nome: 'gui',
    idade: 20
}

const chave = 'nome'

console.log(pessoa[chave])
//console.log(pessoa['nome'])
//console.log(pessoa.nome)

const pessoa2 = new Object();
pessoa2.nome = 'gui';
pessoa2.idade = 20;


delete pessoa2.idade
 

pessoa.dataNasimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
}

console.log(pessoa.dataNasimento())

//factory functions

function createPessoa(nome, sobrenome){
    return {
        nome: nome,
        sobrenome: sobrenome
        
    }
}

// construtor functions
function P(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this) // nenhuma alteraçãos nos osbjetos criados por esse molde, e nem criar outras funções atreladas a ele
}

const pessoa3 = new P('gui', 'lima')
//object.freeze(pessoa3) // evitar alteração no objeto
pessoa3.nome = 'guilherme' // não vai alterar o objeto