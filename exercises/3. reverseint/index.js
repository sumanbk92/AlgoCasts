// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // Math.abs(n) is added for clarity. We can remove it and just use n
    // Because For Ex: parseInt("51-") gives 51 
    return Math.sign(n) * parseInt(Math.abs(n).toString().split('').reverse().join(''));
}

module.exports = reverseInt;
