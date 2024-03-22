// declaração de função
falaOi();
function falaOi(){
    console.log('Oi');
}

const souUmDaso = function(){
    console.log('Sou um dado');

};

souUmDaso();

//function executaFuncao(funcao){
//funcao();
//}

//executaFuncao(souUmDaso)


//arrow function

const arrow = () => {
    console.log('Arrow function');
}
funcaoArrow();

//Dentro de objetos 
const obj = {
    falar: function(){
        console.log('estou falando');},
    falando(){
        console.log('estou falando');
    }    
};

obj.falar();
obj.falando();

