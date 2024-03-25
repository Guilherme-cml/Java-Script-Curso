// Closures

function r(){
    const nome = 'Lima'
    return function(){
        return nome;
    }
}

const exemplo = r();

console.dir(exemplo)
// é retornado na web que é uma funcão anonima
// closure é a habilidade que a função tem de acessar o seu escopos