function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);
console.log(pi());
console.log(pi);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(64, 1.53));

function corFavorita(cor) {
  if (cor.toLowerCase() === "azul") {
    return "Eu gosto do céu";
  } else if (cor.toLowerCase() === "verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu não gosto de nada";
  }
}

addEventListener("click", () => {
  console.log("Oi");
});

function imc2(peso, altura) {
  var imc = peso / (altura * altura);
  console.log(imc);
  return;
}

imc2(64, 1.53);

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor, insira um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(60));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

//console.log(totalPaises);

var profissao = 'Designer';

function dados() {
  var nome = 'Shisaki';
  var idade = 23;
  function outrosDados() {
    var endereco = 'Brusque';
    var idade = 24;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'Shisaki, 24, Brusque, Designer'
console.log(outrosDados()); // retorna um erro