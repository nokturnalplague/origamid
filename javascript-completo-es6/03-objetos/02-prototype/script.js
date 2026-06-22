// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const shisaki = new Pessoa('Shisaki', 'Kirishima', 24);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);

// Object.getOwnPropertyNames(Document.prototype)

// Document (construtor) ≠ document (objeto)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

// console.log([dado].constructor.name);

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
// li.hidden.constructor.name;

const teste = li.hidden.constructor.name;
console.log(teste.constructor.name); // String
