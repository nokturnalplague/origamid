// .forEach(callback(itemAtual, index, array))
const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, i, array) => {
  array[i] = 'Teste';
  console.log(item, i, array);
});

console.log(carros);

// Arrow Function
const li = document.querySelectorAll('li');

li.forEach((i) => i.classList.add('ativa'));

li.forEach(function (item) {
  item.classList.add('ativa');
});

// .map(callback(itemAtual, index, array))
const novaArray = carros.map((item, i, array) => {
  console.log(item, i, array);
  return i;
});

console.log(carros);
console.log(novaArray);

const numeros = [2, 4, 6, 78];
const dobro = numeros.map((n) => n * 2);

console.log(numeros);
console.log(dobro);

const aulasObj = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 10,
  },
  {
    nome: 'CSS 1',
    min: 20,
  },
  {
    nome: 'JS 1',
    min: 25,
  },
];

const tempoAulas = aulasObj.map((aula) => aula.min);

const puxarNomes = (aula) => aula.nome; // ARROW FUNCTION
const nomesAulas = aulasObj.map(puxarNomes);

// .reduce(callback(acumulador, valorAtual, index, array))

const aulas = [10, 25, 30];

const somaAulas = aulas.reduce((acc, cur, i, array) => {
  console.log(acc, cur, i, array);
  return acc + cur;
}, 0);

console.log(somaAulas);

const maiorValor = numeros.reduce((acc, cur) => {
  return cur > acc ? acc : cur;
});

console.log(maiorValor);

const listaAulas = aulasObj.reduce((acc, aula, i) => {
  acc[i] = aula.nome;
  return acc;
}, {}); // Valor inicial: objeto vazio

// .reduceRight()
const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

console.log(frutasRight);
console.log(frutasLeft);

// .some() ||
const temUva = frutas.some((fruta) => {
  return fruta === 'Uva';
});

console.log(temUva);

// .every() &&
frutas.push(undefined);

const every = frutas.every((fruta) => {
  return fruta;
});

console.log(every);

// .find()
const num = [6, 43, 22, 88, 101, 29];

const maior45 = num.find((n) => {
  return n > 45;
});

console.log(maior45);

// .findIndex()
const buscaUva = frutas.findIndex((fruta) => {
  return fruta === 'Uva';
});

console.log(buscaUva);

// .filter()
const lista = ['Item 1', undefined, null, '', 'Item 2', 0, 'Item 3'];

const arrayLimpo = lista.filter((item) => {
  return item;
});

console.log(arrayLimpo);

const aulasMaiores = aulasObj.filter((aula) => {
  return aula.min > 15;
});

console.log(aulasMaiores);
