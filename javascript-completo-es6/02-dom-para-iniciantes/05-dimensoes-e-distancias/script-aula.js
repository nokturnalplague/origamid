const listaAnimais = document.querySelector('.animais-lista');

const animaisHeight = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

console.log(animaisHeight, animaisTop);

const primeiroH2 = document.querySelector('h2');
const h2Left = primeiroH2.offsetLeft;

const h2Rect = primeiroH2.getBoundingClientRect(); //bottom, height, left, right, top, width, x, y

console.log(h2Left, h2Rect);

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset,
  window.pageXOffset,
);

const small = window.matchMedia('(max-width: 600px)').matches;

if (small) {
  console.log('Usuário mobile.');
} else {
  console.log('Usuário desktop.');
}
