// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach((item) => {
  item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItems.forEach((item) => {
  item.classList.remove('ativo');
});
menuItems[0].classList.add('ativo');

console.log(menu.innerHTML);

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img, i) => {
  const temAlt = img.hasAttribute('alt');
  console.log(`Imagem ${i + 1} tem alt: ${temAlt}`);
});

// Modifique o href do link externo no menu
const linkExternoMenu = document.querySelector('.menu a[href^="https://"');
linkExternoMenu.setAttribute('href', 'https://github.com/');
