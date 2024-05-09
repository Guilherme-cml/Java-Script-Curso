//Object defineProperties
function Produto (nome, preco,estoque){
    // this.nome = nome 
    // this.preco = preco
    Object.defineProperties(this, {

        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valors
            writable: true, // pode alterar o valor
            configurable: true // pode reconfigurar
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: false, // pode alterar o valor
            configurable: true // pode reconfigurar
        }



    })

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar o valor
        configurable: true // pode reconfigurar
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 100
console.log(p1)


const p2 = new Produto('Caneca', 20, 3)
console.log(Object.keys(p2)
)