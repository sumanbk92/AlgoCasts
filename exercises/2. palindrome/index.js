// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // // Method 1 - Using reverse() function
    // return str.split("").reverse().join("") === str;

    // Method 2 - Using every() function
    // You can also use str[str.length - index - 1] to access characters in a string
    return str.split("").every((item, index, arr) => {
        return item == arr[arr.length - index - 1];
    });
}


module.exports = palindrome;
