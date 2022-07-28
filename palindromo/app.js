

const word = prompt('inserisci una parola');
let wordArray = word.split('');

console.log(wordArray);

function isPalindrome(word) {
    let arrayReverse = [];
    for (let i = word.length - 1 ; i >= 0; i-- ) {
        arrayReverse.push(word[i]);   
    }
    return arrayReverse
}

console.log(isPalindrome(wordArray));

// console.log(isPalindrome(word));