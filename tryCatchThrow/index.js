// try{
//     console.log(teste)
// }catch(err){
//     console.log('No exist/no defined')
// }
// // não apresenta os logs internos do erro

function soma(num1,num2){
    if( typeof num1 !== 'number'|| typeof num2 !== 'number'){ 
        throw (' x e y precisam ser numeros')
        // redeclara o erro gerado
        //throw new Error(' x e y precisam ser numeros')
        // Lança o erro completo,tipificado pela teg error
    }

    return num1 + num2 
}

try{
    console.log(soma(10,20))
    console.log(soma('30',20))
}catch(err){
    console.log(err)// imprime a redeclaração
}


try{console.log('abro')
    console.log('manipulo')
    console.log('fecho')}
    catch{
        console.log('erro')
    }
    finally{
        console.log('fecho')
    } // finally sempre vai ser executado


function returndate(d){

    if(d && !(d instanceof Date)){
        throw new TypeError('Esperando instancia de Date')
    }


    if(!d){
        d = new Date();
    }

return d.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false});
}

try{
    const d = new Date();
    const hora = returndate(2);
    console.log(hora)
    
}catch(err){
console.log(err)
}finally{
console.log('OK!')
}

    