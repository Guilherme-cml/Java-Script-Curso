const objA = {
    chaveA: 'A'
}
// objA.__proto__ = Object.prototype
const objB = {
    chaveB: 'B'
} // objB.__proto__ = objA

Object.setPrototypeOf(objB, objA)
console.log(objB.chaveA)


function Produto (nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}


const p1 = new Produto('Camiseta', 20)
p1.desconto(50)
console.log(p1)

const p2 = {
    nome: 'Caneca',
    preco: 15}

Object.setPrototypeOf(p2, Produto.prototype)