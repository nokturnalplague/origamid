// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgAnimais = document.querySelectorAll('img[src^="./content/img/imagem"');
console.log(imgAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector('.animais-descricao');
const tituloAnimais = document.querySelector('h2');
// const tituloAnimais = document.querySelector(".animais-descricao h2");
console.log(tituloAnimais);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
const ultimoParagrafo = paragrafos[--paragrafos.length];

console.log(ultimoParagrafo);
