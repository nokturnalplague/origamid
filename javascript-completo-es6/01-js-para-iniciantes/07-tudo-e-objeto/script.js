// nomeie 3 propriedades ou métodos de strings
var nome = 'Shisaki';

nome.toLowerCase();
nome.length;
nome.replace('Shi', 'Mi');

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
btn.classList.add('teste');
btn.innerHTML;

function mudaCor() {
  btn.setAttribute('style', 'background-color: darkblue; color: white;');
  return;
}

btn.addEventListener('click', mudaCor);

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard
// https://clipboardjs.com
