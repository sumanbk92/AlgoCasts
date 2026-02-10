// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Iterartive Solution
function vowels(str) {
    let vowelsArr = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowelsArr.includes(char)) {
            count++;
        }
    }
    return count;
}

// USing Regex
function vowels(str) {
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;
