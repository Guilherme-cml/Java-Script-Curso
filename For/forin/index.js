//const frutas = ['uva', 'limão', 'mamão', 'maça']
// for in lê os indices ou chaves dos objetos
/*for(i in frutas){
    //console.log(i);
    console.log(frutas[i]);
}*/
// para arrays ou vetores


const pessoa = {
    nome: 'gui',
    sobrenome: 'lima',
    idade: 20
};

// formas de selecionar o valor dentro da chave
// console.log(pessoa.nome)
// console.log(pessoa['nome'])

for(chaves in pessoa){
    console.log(chaves) 
    // gera o valor da chave
    console.log(pessoa[chaves])
    // gera o conteudo da chave
}

