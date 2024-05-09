//Getters e Setters

function Produto(nome,preco,estoque){
    this.nome = nome
    this.preco = preco
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: () => {
            return estoque
        },
        set: (valor) => {
            if(typeof valor !== 'number'){
                throw new TypeError('estoque deve ser um numero')
            }
            estoque = valor
        }
    })



}


const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 'qualquer coisa'
console.log(p1)