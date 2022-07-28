

const word = prompt('inserisci una parola');
let wordArray = word.split('');
console.log(wordArray);

let arrayReverse = [];

function isPalindrome(word) {
    

    for (let i = word.length - 1 ; i >= 0; i-- ) {
        arrayReverse.push(word[i]); 
    }
    
    if(wordArray.join('')===arrayReverse.join('')) {
        console.log(arrayReverse);
        return true;
    }else {
        console.log(arrayReverse);
        return false;

    }
    
}

console.log(isPalindrome(word));

