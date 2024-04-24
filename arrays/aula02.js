//metodo splice 
nomes = ['João', 'Maria', 'Antônio', 'Margarida'];
// nomes.splice(indice, delete, elem1, elem2, elem3)


const removidos = nomes.splice(2, 2)
//number.MAX_VALUE representa o maior numero possivel
//splice(x,Number.MAX_VALUE)
console.log(nomes, removidos)

nomes.splice(2,0, 'Luiz', 'Carlos')

//pop
const pop = nomes.splice(-1, 1)
//shift
const shift = nomes.splice(0, 1)
//push
const push = nomes.splice(nomes.length, 0, 'Luiz');
//unshift
const unshift = nomes.splice(0, 0, 'Luiz');
