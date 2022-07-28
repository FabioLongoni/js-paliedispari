
let pariDispari = prompt('pari o dispari?');
console.log(pariDispari);

let numeroUtente = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(numeroUtente);

const computerNumero = Math.floor(Math.random()*5) + 1 ;
console.log(computerNumero);

const somma = computerNumero + numeroUtente;
console.log(somma);

function winner() {

    if ((somma %  2 === 0) && (pariDispari ==='pari')) {
        return true;
    }else if ((somma %  2 === 1) && (pariDispari ==='dispari')) {
        return true;
    }else {
        return false;
    }
}

console.log(winner(somma));