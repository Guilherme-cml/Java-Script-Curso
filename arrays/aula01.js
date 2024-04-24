// revisão básica de array
const nomes = ['João', 'Maria', 'Antônio', 'Margarida'];
const novo = [...nomes]
// as alterações feitas em 'novo' não afetam 'nomes'

novo.pop();
console.log(nomes, novo)

nomes.push('Lucas');
nomes.shift();
nomes.unshift('Luiz');
console.log(nomes.length)
console.log(nomes)


const fatia = nomes.slice(0, 3);

console.log(fatia)

const nome = 'gui caetano lima'
const novoNome = nome.split(' ')
console.log(novoNome)