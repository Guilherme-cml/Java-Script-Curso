// Map

const num = [1,2,3,4,5,6,7,8,9,10]

//dobrando os numeros usando map

const dobro = num.map(n => n*2)

//console.log(dobro)


const obj =[
    {nome: 'Gui', idade: 20},
    {nome: 'Maria', idade: 22},
    {nome: 'Antonio', idade: 25},
]

// remover os nomes usando map

const nomes = obj.map(obj => obj.nome)
/*const Id = obj.map(obj=> {
        obj.id = Math.floor(Math.random(1,200)*100)
        return obj;})*/ 
const Id = obj.map(obj=> {
        const newobj = {...obj}
        newobj.id = Math.floor(Math.random(1,200)*100)
        return newobj;})
const idades = obj.map(obj => ({idade: obj.idade}))
console.log(idades)
console.log(nomes)
console.log(Id)