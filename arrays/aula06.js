// Reduce

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const total = nums.reduce(function(a,v){
    a += v
    return a
})

//console.log(total)


const pessoas = [{nome: 'Gui', idade: 20}, 
{nome: 'Maria', idade: 22}, 
{nome: 'Antonio', idade: 25}, 
{nome: 'Margarida', idade: 78}]


const mIdade = pessoas.reduce(function(a,v){
    if(a.idade > v.idade) return a
    return v})

console.log(mIdade)