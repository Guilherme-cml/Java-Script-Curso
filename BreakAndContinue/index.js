const num = [1,2,3,4,5];

for(numero of num){
    if(numero === 3){
        //continue;
        break;
    }
    console.log(numero)
}

// o continue faz com que o codigo pare ai e continue
// nesse exemplo ele checa se o numero é igual a 3 e se for ele para ali e vai pro proximo loop do for.

// o break faz com que o laço pare de ser executado

// se for usar break e continue com while e do while sempre lembre de atualizar a variavel antes dos respectivos, para não formar um laço infinito.