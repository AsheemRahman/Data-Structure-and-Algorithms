// find the Value in array

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Target found, return index
        }
    }
    return -1; // Target not found
}

let numbers = [10, 20, 30, 40, 50];
let target = 30;
let result = linearSearch(numbers, target);
console.log(result); // Output: 2
