// ERRADO
// const carro = {
//   marca: 'marca',
//   preco: 0,
// };

// const honda = carro;
// honda.marca = 'Honda';
// honda.preco = 2000;

// const fiat = carro;
// fiat.marca = 'Fiat';
// fiat.preco = 3000;

function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 4000);

const fiat = new Carro('Fiat', 3000);
fiat.preco = 3500;

function Carro2(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000)
//Retorna Carro 2 {taxa: 1.2, marca: 'Mazda, preco: 6000}