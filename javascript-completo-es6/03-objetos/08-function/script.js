// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(
  paragrafos,
  (acc, item) => {
    let length = item.innerText.length;
    return acc + length;
  },
  0,
);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function novoHtml(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  elemento ? (elemento.innerText = conteudo) : null;
  return elemento;
}

novoHtml('p', 'teste', 'Teste');

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const novoH1 = novoHtml.bind(null, 'h1', 'titulo');

novoH1('Funcinou');
