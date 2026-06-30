const perimetro = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
  return n1 + n2;
}

console.log(somar(3, 3));

// .length
console.log(somar.length);

// .name
console.log(somar.name);

// .call(this, arg1, arg2, ...)
function darOi(nome) {
  console.log(`Olá ${nome}!`);
}

darOi.call({}, 'Shisaki');

const ford = {
  marca: 'Ford',
  ano: 2018,
};

function descricaoCarro() {
  console.log(this);
  console.log(`${this.marca} ${this.ano}`);
}

descricaoCarro(ford);
descricaoCarro.call({ marca: 'Honda', ano: 2012 });
descricaoCarro.call(ford);

const carros = ['Ford', 'Fiat', 'VW'];
const frutas = ['Banana', 'Uva', 'Pêra'];

carros.forEach((item) => {
  console.log(item);
});

carros.forEach.call(carros, (item) => {
  console.log(item);
});

carros.forEach.call(frutas, (item) => {
  console.log(item);
});

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativar = function (classe) {
  this.element.classList.add(classe);
};

const ul = new Dom('ul');

let li = {
  element: document.querySelector('li'),
};

// ul.ativar.call(li, 'ativo');
// ul.ativar('ativo');

Dom.prototype.ativar.call(li, 'ativo');

Array.prototype.mostrarThis = function () {
  console.log(this);
};

Array.prototype.pop.call(frutas);

const arrayLike = {
  0: 'Item 1',
  1: 'Item 2',
  2: 'Item 3',
  length: 3,
};

li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains('ativo');
});

// .apply(this, [arg1, arg2, ...])
const numeros = [33, 232, 33, 434, 54, 5424, 4];

console.log(Math.max.apply(null, numeros));

// .bind(this, arg1, arg2, ...)
const $ = document.querySelectorAll.bind(document);

console.log($('li'));

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

const honda = {
  marca: 'Honda',
};

const acelerarHonda = carro.acelerar.bind(honda);

console.log(acelerarHonda(300, 20));

function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.8);

imc(1.8, 70);
imc180(70);
