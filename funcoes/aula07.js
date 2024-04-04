//IIFE - funções imediatas

(function(p1,p2){ //não toca o escopo global
    console.log('Sera executado na hora')



    function teste(){
        let teste = 'teste'
        console.log(teste)
    }

    function adicionaTeste(t){
        let complemento = 'testando'
        console.log(t + complemento)


    }

    adicionaTeste('teste da função ')
    teste()
    console.log(p1,p2) // podemos passar parametros nas funções imediatas e executar eles normalmente
})(30,40);

// IIFE - Immediately Invoked Function Expression

//Elas tem o funcionamento comum podendo serem declarar outras funções dentro
