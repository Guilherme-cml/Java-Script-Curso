//Com Objetos

const pessoa = {
    nome: 'Gui',
    sobrenome: 'Caetano',
    endereco: {
        rua: 'Qno 13',
        numero: 38
    }
};

// Atribuição via desestruturação

const { 
    endereco: {rua: r = 12354, numero = nada }, endereco } = pessoa;

    //console.log(rua, numero, endereco);


    //no codigo acima nós relacionamos o conteudo de rua presente no objeto pessoa a outra variável, fazendo assim que no console rua dê erro



    const  {nome, ...resto} = pessoa;

   // console.log(nome, resto)
    // a atribuição logo após os (...) faz com que 'resto' contenha todo o resto do objeto pessoa
