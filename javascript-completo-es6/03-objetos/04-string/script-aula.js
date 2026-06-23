// length
const comida = 'Pizza';
const agua = new String('Água');

console.log(agua.length);

const uta = 'Não posso viver com você, nem sem você';

console.log(uta[--uta.length]);

// charAt(n)
console.log(uta.charAt(--uta.length));

// concat(str1, str2, ...)
const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseCompleta = frase.concat(linguagem);
console.log(fraseCompleta);

// includes(str, position)
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta));

// startsWith(str) | endsWith(str)
console.log(fruta.startsWith('Ba'));
console.log(fruta.startsWith('ba'));
console.log(fruta.endsWith('na'));
console.log(fruta.endsWith('nas'));

// slice(start, end)
console.log(uta.slice(0, 24));
console.log(uta.slice(-8));
console.log(uta.slice(26));

// substring(start, end)
console.log(linguagem.substring(0, 4));

// indexOf(str) | lastIndexOf(str)
console.log(fruta.indexOf('a'));
console.log(fruta.lastIndexOf('n'));

// padStart(n, str) | padEnd(n, str)
console.log(fruta.padStart(10, '.'));
console.log(fruta.padEnd(10, '.'));

const preco = 'R$ 99,00';
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10));
});

// repeat (n)
const silaba = 'Ho';

console.log(silaba.repeat(3));

// replace(regexp|substr, newstr|function)
const listaItems = 'Camisas Bonés Calças Bermudas Vestidos Saias';

console.log(listaItems.replace('Camisas', 'Camisetas'));
console.log(listaItems.replace(' ', ', '));
console.log(listaItems.replace(/[ ]+/g, ', '));

console.log(preco.replace(',', '.'));

// split(pattern)
console.log(listaItems.split(''));
console.log(listaItems.split(' '));

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlArray);
console.log(novoHtml);

// toLowerCase() | toUpperCase()
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLowerCase() === 'feminino');
console.log(sexo2.toLowerCase() === 'feminino');
console.log(sexo3.toLowerCase() === 'feminino');

// trim() | trimStart() | trimEnd()
const valor = '   R$ 23.00   ';

console.log(valor.trim());
console.log(valor.trimStart());
console.log(valor.trimEnd());
