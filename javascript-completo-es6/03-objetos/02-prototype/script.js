function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

var obj = {
  nome: 'Kirishima',
  idade: 24,
};

obj.teste = 'Teste';

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`
}

Pessoa.prototype.nadar = function() {
  return `${this.nome} nadar`
}

const shisaki = new Pessoa('Shisaki', 24);

console.log(Pessoa.prototype);
