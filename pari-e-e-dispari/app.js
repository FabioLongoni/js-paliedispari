
let pariDispari = prompt('pari o dispari?');
console.log(pariDispari);

let numeroUtente = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(numeroUtente);


function generatoreNumeroCpu(numeroCasuale) {
    const computerNumero = Math.floor(Math.random()*5) + 1 ;
    return computerNumero;
}

console.log(generatoreNumeroCpu());

