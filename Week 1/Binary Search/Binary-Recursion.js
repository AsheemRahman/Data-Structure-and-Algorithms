//Binary using recursion

function binarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, start, end) {
    if (start > end) {
        return -1;
    }
    let mid = Math.floor((start + end) / 2);
    if (target === arr[mid]) {
        return mid;
    }
    if (target < arr[mid]) {
        return search(arr, target, start, mid - 1);
    } else {
        return search(arr, target, mid + 1, end);
    }
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // Output: 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6));  // Output: 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // Output: -1