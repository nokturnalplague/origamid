// window.alert("Isso mesmo!");

const href = window.Location.href;
const hrefIndex =
  "http://127.0.0.1:5500/2-dom-para-iniciantes/1-o-que-e-dom/index.html";

if (href === hrefIndex) {
  console.log("É igual");
}

const h1Selecionado = document.querySelector("h1");
const h1Classes = h1Selecionado.classList;

function callbackH1() {
  console.log(`Clicou em ${h1Selecionado.innerText}`);
}

h1Selecionado.addEventListener("click", callbackH1);
