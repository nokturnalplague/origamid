var videoGames = ["Switch", "PS4", "Xbox", "3DS"];

// var ultimoItem = videoGames.pop();
// videoGames.push("3DS");
// videoGames.length;

// for (numero inicial, condição para continuar, incremento)

for (let numero = 1; numero <= 10; numero++) {
  console.log(numero);
}

let item = 1;
while (item <= 10) {
  console.log(item);
  item++;
}

for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  // if (videoGames[i] === 'PS4') {
  //   break;
  // }
}

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva']

frutas.forEach(function (fruta, i, array) {
  console.log(fruta, i, array);
});

// O primeiro valor, nesse caso 'fruta', vira dinamicamente o valor do array
