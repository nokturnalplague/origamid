const img = document.querySelector('img');

function callbackImagem(event) {
  console.log(event);
}

// img.addEventListener("click", callbackImagem);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  const elementoExecutado = event.currentTarget;
  const elementoClicado = event.target;
  console.log(elementoExecutado, elementoClicado);
}

// animaisLista.addEventListener("click", callbackLista);

const linkExterno = document.querySelector('a[href^="http"');

function callbackLinkExterno(event) {
  event.preventDefault();
  console.log('Clicou');
}

// linkExterno.addEventListener("click", callbackLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}

// h1.addEventListener("click", handleEvent);
// h1.addEventListener("mouseenter", handleEvent);

// window.addEventListener("scroll", handleEvent);
// window.addEventListener("resize", handleEvent);

// window.addEventListener("keydown", handleEvent);

function handleKeyboard(event) {
  if (event.key === 'f') {
    document.querySelector('body').classList.toggle('fullscreen');
  }
}

// window.addEventListener("keydown", handleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.currentTarget.getAttribute('src'));
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg);
});
