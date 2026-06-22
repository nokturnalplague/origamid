function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return 'Abraçou';
  };
  this.andar = function () {
    return 'Andou pelo objeto';
  };
}

var obj = {
  nome: 'Kirishima',
  idade: 23,
};

obj.teste = 'Isso';

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

Pessoa.prototype.nadar = function () {
  return `${this.nome} nadou`;
};

const shisaki = new Pessoa('Shisaki', 24);

// console.log(Pessoa.prototype);
// console.log(shisaki.prototype);

const pais = 'Brasil';
const cidade = new String('Brusque');

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype));

console.log(Object.getOwnPropertyNames(shisaki));
console.log(Object.getOwnPropertyNames(shisaki.__proto__));

console.log(shisaki.constructor.name);

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return true;
  },
};

console.log(Carro.andar.constructor.name); // Function
console.log(Carro.andar().constructor.name); // Tipo do retorno da função
