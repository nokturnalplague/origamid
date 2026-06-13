var pessoa = {
  nome: "Shisaki",
  idade: 24,
};

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

var height = 120;
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84e",
  metadeHeight() {
    return this.height / 2; //25
    // return height / 2; //60
  },
};

menu.backgroundColor = "#000";
menu.color = "blue";

menu.esconder = function () {
  console.log("Esconder");
};

var bg = menu.backgroundColor;
