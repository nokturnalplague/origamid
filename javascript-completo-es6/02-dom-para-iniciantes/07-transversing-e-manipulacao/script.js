// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const menuCopia = menu.cloneNode(true);

copy.appendChild(menuCopia);

// Selecione o primeiro DT da dl de Faq
const dt = document.querySelector('.faq dl dt');

// Selecione o DD referente ao primeiro DT
const dd = dt.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animaisHtml = document.querySelector('.animais').innerHTML;

faq.innerHTML = animaisHtml;
