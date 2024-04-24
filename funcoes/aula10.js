function* geradora1(){
    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
}

const g1 = geradora1();
// console.log(g1) // apresenta objeto gerador = Object [Generator] {}
// console.log(g1.next()) // { value: 'valor 1', done: false }
// console.log(g1.next().value) // valor 2
// console.log(g1.next().done) // false

for(let valor of g1){
    console.log(valor)}
