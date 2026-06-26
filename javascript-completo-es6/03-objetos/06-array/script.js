const dados = [
  new String('Tipo 1'),
  ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

dados[2]('Ford');
dados[1][2].cor; // azul

const legumes = new Array('Batata', 'Cenoura', 'Beterraba');

legumes[2] = 'Batata Doce';
legumes[3] = 'Cebola';
legumes[20] = 'Tomate';

// length
console.log(legumes.length);

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

console.log(frutas.length);

// Array.from(element)
const li = document.querySelectorAll('li');

const arrayLi = Array.from(li);

console.log(li, arrayLi);

const obj = {
  0: 'Shisaki',
  1: 'Kirishima',
  2: 'Teste',
  length: 3,
};

const objArray = Array.from(obj);

console.log(objArray);

// Array.isArray(element)
console.log(Array.isArray(li));
console.log(Array.isArray(arrayLi));

// Array.of(value) | Array(value) | new Array(value)
console.log(Array.of(10));
console.log(Array(20));

/* MÉTODOS MODIFICADORES */

// .sort()
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();

console.log(instrumentos, idades);

// .unshift(value)
const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Kia', 'Ferrari');

// .push(value)
const novaArray = carros.push('Parati', 'Gol');

// console.log(carros, novaArray);

// // .shift()
// console.log(carros.shift());
// console.log(carros);

// // .pop()
// console.log(carros.pop());
// console.log(carros);

// // .reverse()
// carros.reverse();
// console.log(carros);

// console.log(carros);

// // .splice(i, remover, item1, item2, ...)
// console.log(carros.splice(2, 1, 'Fusca'));

// console.log(carros);

// .copyWithin(alvo, inicio, final)
console.log(
  ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].copyWithin(2, 0, 2),
);
