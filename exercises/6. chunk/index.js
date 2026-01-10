// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// My Solution
// function chunk(array, size) {
//     let finalArr = [];
//     for (let i = 0; i < array.length; i += size) {
//         let chunkArr = [];
//         for (let j = i; j < i + size; j++) {
//             let item = array[j]
//             if (item) {
//                 chunkArr.push(item);
//             }
//         }
//         finalArr.push(chunkArr);
//     }
//     return finalArr;
// }

// // Stephen Grider Solution
// function chunk(array, size) {
//     const chunked = [];

//     for (let element of array) {
//         const last = chunked.at(-1);

//         if (!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//     return chunked;
// }

// // slice() method
function chunk(array, size) {
    const chunked = [];

    for (let i = 0; i < array.length; i += size) {
        let slicedArr = array.slice(i, i + size);
        chunked.push(slicedArr);
    }
    return chunked;
}


module.exports = chunk;
