const pessoas = [
    {id: 1, nome: 'Gui'},
    {id: 2, nome: 'Maria'},
];


const novasPessoas = new Map();
 for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});

 }
// para adicionar novas chaves e valores usamos o set, para obter os valores usamos o get 
// ex: novasPessoas.get(id) 

 console.log(novasPessoas)

 //podemos iterar sobre o map

 for(const pessoa of novasPessoas){// poderiamos puxar somente as chaves usando novasPessoas.keys()| e também os valores usando novasPessoas.values()
     console.log(pessoa)
 }

 // também poderia usar o delete para deletar um item do map