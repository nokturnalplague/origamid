var x = 20;
var y = 10;

x += y;

console.log(x); // 30

// condição ? true : false
// não faz sentido colocar true/false como resultado do ternário, a condição já retorna isso
var idade = 24;

var podeBeber = idade >= 18 ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber);

var possuiFaculdade = true;
if (possuiFaculdade) console.log('Sim, possui');
