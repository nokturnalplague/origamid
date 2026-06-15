"use strict"; // não permite criar variáveis globais

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
// console.log(carro); // Erro: 'carro is not defined'

if (false) {
  const mes = "Junho";
  console.log(mes);
}

// console.log(mes);

{
  var carro2 = "Fusca 2";
  const ano = 2018;
}
console.log(carro2); // Fusca
// console.log(ano); // Erro: 'ano is not defined'
var i = 50;

// for (let i = 0; i < 20; i++) {
//   console.log(`Número ${i}`);
// }

console.log(i * 10);

const semana = "Sexta";
//semana = "Quinta";
console.log(semana);

const data = {
  ano: 2018,
  mes: "Dezembro",
};

data.ano = 2019;
data.dia = 25;

let ano = 2018;
ano = 2018;
ano++;
console.log(ano);

// let ano = 2020; // Erro: não pode redeclarar
