// Escopo Léxico
 // a função criada consegue acessar declarados valores de fora da função

// Exemplo

const nome = 'Gui'

function exemplo(){
    console.log(nome)
}
exemplo();


function usaExemplo(){
    const nome = 'Lima'
    exemplo();
}
// apesar de ter outra variável 'nome' dentro da função isso não irá interferir no funcionamento da função exemplo
usaExemplo()
