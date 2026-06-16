const h1 = document.querySelector('h1');
const animaisDescricao = document.querySelector('.animais-descricao');

// h1.outerHTML = '<p>Novo Título</p>'
// console.log(animaisDescricao.innerText);

const lista = document.querySelector('.animais-lista');

console.log(lista.children[--lista.children.length]);
console.log(lista.querySelector('li:last-child'));

console.log(lista.childNodes);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

const mapa = document.querySelector('.mapa');

// animais.appendChild(titulo);

// contato.insertBefore(animais, mapa);
// contato.removeChild(titulo);
contato.replaceChild(mapa, titulo);

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

mapa.appendChild(novoH1);

const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

cloneH1.style.backgroundColor = 'lightblue';

faq.appendChild(cloneH1);
