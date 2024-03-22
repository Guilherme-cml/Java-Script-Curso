//Aula de Parametros
function f(){
    console.log('f')
}

f('teste');
//funciona perfeitamente
// os parâmetros são guardados na variável arguments. lembrando que só funciona nas functions


function teste(){
    console.log(arguments[3]);
}

teste(12,90,'aaaa', true)

function soma(){
    let total = 0
    for(let argumento of arguments){
        total += argumento
    }
    console.log(total)
}

soma(9,900,1);

function b(a, b = 0, c = 8){ // o valor de b e c já foram predefinidos então se eles não forem passados nos paramentros serão assumidos os valores padrões
   // b = b || 0; // outra forma de predefinir os valores
    console.log(a + b + c)
}
b(10);

b(2, undefined, 10); // unica forma de declarar o c e o b usar o valor predefinido

function d({nome, idade, peso}){ // usando desestruturação de objetos no parâmetro da função
    console.log(nome, idade, peso)
}

// let pessoa = {nome: 'Gui', idade: 20, peso: 80}
d({nome: 'Gui', idade: 20, peso: 80})

function conta(operador, acumulador, ...numeros){ // usando rest 
    console.log(operador, acumulador, numeros)
    for(let numero of numeros){
        if(operador === '+') acumulador += numero
        if(operador === '*') acumulador *= numero
        if(operador === '-') acumulador -= numero
        if(operador === '/') acumulador /= numero
    }
    console.log(acumulador)
}

conta('*', 1, 20,90,50,12);




 
