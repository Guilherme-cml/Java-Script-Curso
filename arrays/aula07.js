// Map, Reduce e Filter

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const calculo = nums.filter(v => v % 2 === 0
).map(v=> v * 2
).reduce((a, v) => a + v);

console.log(calculo)