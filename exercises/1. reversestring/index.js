// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Method 1 - Using built-in functions
    return str.split("").reverse().join("");

    // //  Method 2 - Using reduce - Same technique as below for of loop
    // return str.split('').reduce((reversed, char) => char + reversed);

    // // Method 3 - Using for of loop
    // /*
    //     apple
    //     'a' + '' = 'a'
    //     'p' + 'a' = 'pa'
    //     'p' + 'pa' = 'ppa'
    //     'l' + 'ppa' = 'lppa'
    //     'e' + 'lppa' = 'elppa'
    // */
    // let reversed = '';
    // for (let char of str) {
    //     reversed = char + reversed;
    // }
    // return reversed;

    // // Method 4 - Using traditional for loop
    // let reversed = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversed += str[i];
    // }
    // return reversed;

    // // Method 5 - Using while loop
    // let reversed = '';
    // let i = str.length - 1;
    // while (i >= 0) {
    //     reversed += str[i--];
    // }
    // return reversed;
}

module.exports = reverse;
