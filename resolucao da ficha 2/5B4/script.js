const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let parte1 = [];
let parte2 = [];

for (let i = 0; i < numeros.length; i++) {
  if (i % 2 == 0) {
    parte1.push(numeros[i]);
  } else {
    parte2.push(numeros[i]);
  }
}

console.log(parte1);
console.log(parte2);