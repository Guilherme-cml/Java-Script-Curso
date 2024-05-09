const produto = {nome: 'Produto', preco: 1.8};
//const copia = {...produtos, material: 'porcelana'};
const copia = Object.assign({}, produto, {material: 'porcelana'});
console.log(copia)

// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false
// })

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))


// console.log(Object.values(copia))
// console.log(Object.entries(copia))


for(let [chave, valor] of Object.entries(copia)){
    console.log(chave, valor)}