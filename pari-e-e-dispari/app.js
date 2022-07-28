
let pariDispari = prompt('pari o dispari?');
console.log(pariDispari);

let numeroUtente = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(numeroUtente);

const computerNumero = Math.floor(Math.random()*5) + 1 ;
console.log(computerNumero);

const somma = computerNumero + numeroUtente;
console.log(somma);

function isEven() {
    if (somma %  2 === 0) {
        return true;
    }
}

console.log(isEven(somma));