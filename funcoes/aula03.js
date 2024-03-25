// Retorno função

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador
    }
}
// a função criada dentro de outra consegue usar os parametros usados na primeira
// como por exemplo o multiplicador

//
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(3))
console.log(triplica(20))
console.log(quadriplica(2))