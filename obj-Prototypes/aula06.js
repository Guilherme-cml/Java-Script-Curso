// Herança

function Produto (nome,preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(aumento){
    this.preco += aumento
}

function Camiseta (nome, cor, preco){
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta

// podemos reescrever o proto aumento
/*Camiseta.prototype.aumento = function(percentual){
   this.preco = this.preco + (this.preco * (percentual / 100)) 
}*/

function Caneca (nome,material, preco, estoque){
    Produto.call(this, nome, preco)
    this.material = material
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: () => {
            return estoque
        },
        set: (valor) => {
            if(typeof valor !== 'number') return;
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca

const p1 = new Camiseta('Regata', 'Preta', 20)
const c1 = new Caneca('Caneca', 'porcelana', 15,50)
c1.aumento(10)
console.log(p1)
console.log(c1)

