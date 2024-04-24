//Filte - Sempre retorna um novo array sendo menor ou igual ao array original
// retornar os elementos que forem maiores que 10
const num = [30,89,1,5,32,42,1,4,5,6,2,10]
// let num2 = []

// for(let n of num){
//     n > 10? num2.push(n):null
// }
// console.log(num2)

// function callbackfilter(valor){
    
//     return valor > 10 // = valor > 10 ? true : false
// }


// const num2 = num.filter(callbackfilter)

const num2 = num.filter( n => n > 10); // função anonima que passa por todos os elementos do array



console.log(num2)

const pessoas = [
    {nome: 'Gui', idade: 20},
    {nome: 'Maria', idade: 22},
    {nome: 'Antonio', idade: 25},
    {nome: 'Margarida', idade: 78},
    {nome: 'Lucas', idade: 30}
]


const filtronome = pessoas.filter( p => p.nome.length > 6)
console.log(filtronome)

const filtroidade = pessoas.filter(p => p.idade > 50);
console.log(filtroidade)

const nomeTa = pessoas.filter(p => p.nome.toLowerCase().endsWith('a'))
console.log(nomeTa)