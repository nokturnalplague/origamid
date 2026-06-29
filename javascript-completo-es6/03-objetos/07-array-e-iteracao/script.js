// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursosHtml = document.querySelectorAll('.curso');
let cursos = Array.from(cursosHtml);

cursos = cursos.map((curso, i) => {
  nome = curso.querySelector('h1').innerText;
  descricao = curso.querySelector('p').innerText;
  aulas = curso.querySelector('.aulas').innerText;
  horas = curso.querySelector('.horas').innerText;
  return {
    nome,
    descricao,
    aulas,
    horas,
  };
});

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorQue100 = numeros.filter((n) => {
  return n > 100;
});

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

const temBaixo = instrumentos.some((instrumento) => {
  return instrumento === 'Baixo';
});

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99',
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99',
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49',
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35',
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60',
  },
];

const valorTotal = compras.reduce((acc, item) => {
  const precoLimpo = +item.preco.replace('R$', '').replace(',', '.').trim();
  return acc + precoLimpo;
}, 0);
