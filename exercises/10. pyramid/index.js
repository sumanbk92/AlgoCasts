// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


// Using Iterative and nested for loop
// function pyramid(n) {
//     let mid = n - 1;
//     for (let i = 0; i < n; i++) {
//         let char = "";
//         for (let j = 0; j < 2 * n - 1; j++) {
//             if (j >= (mid - i) && j <= (mid + i)) {
//                 char += "#";
//             } else {
//                 char += " ";
//             }
//         }
//         console.log(char);
//     }
// }

// Recursive Solution
function pyramid(n, row = 0, level = "") {
    if (n == row) {
        return;
    }
    if (level.length == 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }
    let mid = n - 1;

    let add = "";
    if (level.length >= (mid - row) && level.length <= (mid + row)) {
        add = "#";
    } else {
        add = " ";
    }
    pyramid(n, row, level + add);
}

// Using repeat and one for loop
// function pyramid(n) {
//     for (let i = 0; i < n; i++) {
//         let spaces = " ".repeat(n - i - 1);
//         let hashes = "#".repeat(2 * i + 1);
//         console.log(spaces + hashes);
//     }
// }

pyramid(10)
module.exports = pyramid;
