// Rotate an Array

function rotateArray(nums, k) {
    k = k % nums.length;
    return nums.slice(-k).concat(nums.slice(0, -k));
}

let nums = [1, 2, 3, 4, 5];

console.log(rotateArray(nums, 2)); // Output: [4, 5, 1, 2, 3]
