const nome = 'gui';
const frutas = ['uva', 'limão', 'mamão', 'maça'];

for(valor of nome){
console.log(valor)
}

for(valor of frutas){
    console.log(valor)
    }

//-----------------------------------------------------------------------------------------------------------------------

frutas.forEach(function(valor,indice, array){
    console.log(valor, indice)
})