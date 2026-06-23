// Liste 5 objetos nativos

Object;
String;
Array;
Function;
Number;

// Liste 5 objetos do browser

// >_Window no console do browser lista eles

window;
document;
location;
history;
// chrome;

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

const props = [navigator.bluetooth, navigator.usb];

props.forEach((prop) => {
  if (typeof prop !== 'undefined') {
    console.log(`${prop} existe nesse navegador.`);
  } else {
    console.log(`${prop} não existe nesse navegador.`);
  }
});
