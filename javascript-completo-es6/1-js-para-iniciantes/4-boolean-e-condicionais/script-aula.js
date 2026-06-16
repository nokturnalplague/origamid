var possuiGraduacao = true;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log('Possui Graduação');
} else if (possuiDoutorado) {
  console.log('Possui Doutorado');
} else {
  console.log('Não possui nada');
}

var nome = '10kg' / 10;

if (nome) {
  console.log(nome);
} else {
  console.log('Nome não existe');
}

if (!possuiGraduacao) {
  console.log('Não possui graduação');
}

var x = '10';
console.log(x !== 11);

// x == 10 → true
// x === 10 → false

var condicional = 5 - 5 && 5 + 5;

if (condicional) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional);

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  case 'Verde':
    console.log('Olhe para a floresta.');
    break;
  default:
    console.log('Feche os olhos.');
}
