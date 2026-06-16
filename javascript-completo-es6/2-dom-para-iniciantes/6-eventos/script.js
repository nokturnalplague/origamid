// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  });
  this.classList.add('ativo');
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const all = document.querySelectorAll('body *');

function handleAll(event) {
  console.log(this);
  // this.remove();
}

all.forEach((item) => {
  item.addEventListener('click', handleAll);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function keyboardHandler(event) {
  if (event.key === 't') {
    const html = document.querySelector('html');  
    const tamanhoAtual = Number(getComputedStyle(html).fontSize.replace('px', ''),);
    html.style.fontSize = `${tamanhoAtual + 1}px`;
    /* OUTRA OPÇÃO
    CSS = .texto-maior { font-size: 120%; }
    document.documentElement.classList.toggle('texto-maior');
    */
  }
}

window.addEventListener('keydown', keyboardHandler);
