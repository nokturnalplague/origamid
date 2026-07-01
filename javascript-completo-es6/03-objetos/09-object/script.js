const pessoa = new Object({
  nome: 'Shisaki',
});

const carro1 = {
  marca: 'Ford',
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou`;
  },
  buzinar() {
    return `${this.marca} buzinou`;
  },
};

// Object.create(obj, define properties)
const honda = Object.create(carro1).init('Honda');

console.log(honda);

const ferrari = Object.create(carro1).init('Ferrari');

// Object.assign(alvo, obj1, obj2)
const funcaoAutomovel = {
  acelerar() {
    return 'Acelerou';
  },
  buzinar() {
    return 'Buzinou';
  },
};

const moto1 = {
  rodas: 2,
  capacete: true,
};

const carro2 = {
  rodas: 3,
  capacete: false,
};

Object.assign(moto1, funcaoAutomovel);
Object.assign(carro2, funcaoAutomovel);

// Object.definePropertis(alvo, propriedades) | value, configurable, enumerable, writable, get, set
const moto2 = {};

Object.defineProperties(moto2, {
  capacete: {
    value: true,
    configurable: false,
    writable: false,
    enumerable: false,
  },
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor) {
      return (this._rodas = valor * 4);
    },
  },
});

console.log(moto2);

// Object.getOwnPropertyDescriptors(obj)
console.log(Object.getOwnPropertyDescriptors(Array));
console.log(Object.getOwnPropertyDescriptors(Array.prototype));

// Object.keys(obj) | Object.values(obj) | Object.entries(obj)
console.log(Object.keys(carro1));
console.log(Object.values(carro1));
console.log(Object.entries(carro1));

// Object.getOwnPropertyNames(obj)
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype));

// Object.getPrototypeOf()
const frutas = ['Banana'];
console.log(Object.getPrototypeOf(frutas));
console.log(Array.prototype);

// Object.is()
const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];
const novaFruta = frutas;

console.log(Object.is(frutas1, frutas2));
console.log(Object.is(frutas, novaFruta));

// Object.freeze()
Object.freeze(carro1);
carro1.marca = 'Honda';
console.log(carro1);

// Object.seal()
const kombi = {
  rodas: 4,
  portas: 2,
};

Object.seal(kombi);
kombi.portas = 3;
kombi.automatica = false;
delete kombi.rodas;
console.log(kombi);

// Object.preentExtensions()
Object.preventExtensions(carro2);
delete carro2.capacete;
carro2.rodas = 4;
carro2.portas = 2;
console.log(carro2);

console.log(Object.isFrozen(carro1));
console.log(Object.isSealed(kombi));
console.log(Object.isExtensible(carro2));
