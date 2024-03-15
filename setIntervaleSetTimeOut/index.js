function horas(){
let data = new Date ();

return data.toLocaleTimeString('pt-BR',{hour12:false})
}
//função para retirar a data atual

setInterval(function(){console.log(horas());}, 1000)
// executa o que está dentro do escopo no tempo definifo
// criado uma função anonima que ira puxar a outra função

setTimeout(function(){clearInterval(timer);}, 5000);
// criado uma função anonima que ira parar o intervalo, no tempo desejado







