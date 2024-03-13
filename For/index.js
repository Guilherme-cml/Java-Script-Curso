/*for (let i = 0; i<=10; i++){
    console.log(i)
}*/



// for (let i = 0; i<=1000; i+= 50){
//     console.log(i)}
 // Pulando de 50 em 50



/*const frutas = ['uva', 'limão', 'mamão', 'maça']

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}*/
// for passando por um array



//Exercicio

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    //console.log(elementos[i].tag)
    let {tag , texto}= elementos[i]
    //separando tag e texto do objeto
    let criadortag = document.createElement(tag);
    // criando as tags no html
    criadortag.innerText = texto
    // adicionando o texto em cada tag(usando o innertext porque o não tem html no texto)
    div.appendChild(criadortag)
    // adicionando a tag dentro da div criada acima
}

container.appendChild(div)
// adiionando a div dentro do container


//let t = elementos[0].tag ok