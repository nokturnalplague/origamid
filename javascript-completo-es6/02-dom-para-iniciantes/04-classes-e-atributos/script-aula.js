const menu = document.querySelector('.menu');

menu.classList.add('ativo');
menu.classList.remove('azul');

if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

// console.log(menu.classList);

const animais = document.querySelector('.animais');

console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

img.setAttribute('alt', 'É uma reposa');

const possuiAlt = img.hasAttribute('alt');

console.log(img.getAttribute('alt'));

const carro = {
  portas: 4,
  andar(km) {
    console.log(`Andou ${km}km.`);
  },
};
