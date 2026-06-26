const ano = 2026;
const valor = new Number(99);

// Number.isNan()
console.log(isNaN('str'));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN('str'));
console.log(Number.isNaN(5));

// Number.isInteger()
console.log(Number.isInteger(20));
console.log(Number.isInteger(23.66));

// Number.parseFloat(str)
console.log(Number.parseFloat('99.50'));
console.log(Number.parseFloat('100 reais'));
console.log(Number.parseFloat('R$ 100'));

// Number.parseInt(str, radix)
console.log(Number.parseInt('99.50'));
console.log(Number.parseInt('     99.50'));
console.log(Number.parseInt('99.50 reais'));

// toFixed(decimais)
const preco = 2.87;

console.log(preco.toFixed());
console.log(preco.toFixed(1));
console.log(preco.toFixed(2));

// toString(radix)
console.log(preco.toString());
console.log((198).toString(16));

// toLocaleString(lang, options)
const precoEua = preco.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});
const precoBr = preco.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

console.log(precoEua, precoBr);

// Math
console.log(Math.PI);

// Math.abs()
console.log(Math.abs(-5));

// Math.ceil()
console.log(Math.ceil(4.3));

// Math.floor()
console.log(Math.floor(4.8));

// Math.round()
console.log(Math.round(4.49));
console.log(Math.round(4.5));

// Math.max()
console.log(Math.max(5, 3, 10, 42, 2));

// Math.min()
console.log(Math.min(5, 3, 10, 42, 2));

// Math.random()
Math.random();

// Entre 0 a 100
Math.floor(Math.random() * 100);
// Entre 0 a 500
Math.floor(Math.random() * 500);

// Entre valores específicos
const min = 12;
const max = 73;

Math.floor(Math.random() * (max - min + 1)) + min;
