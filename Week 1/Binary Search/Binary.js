
function binarySearch(arr, target) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (target === arr[mid]) {
            return mid
        }
        if (target < arr[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10))
console.log(binarySearch([-5, 2, 4, 6, 10], 6))
console.log(binarySearch([-5, 2, 4, 6, 10], 20))


// first occurence in binary Search

function binarySea(arr, target) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (mid === 0 || arr[mid - 1] != arr[mid] && target == arr[mid]) {
            return mid
        }
        if (target < mid) {
            start = mid - 1
        } else {
            end = mid + 1
        }
    }
}

// last occurence in binary Search

function binary(arr, target) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (mid === arr.length - 1 || arr[mid + 1] != arr[mid] && target == arr[mid]) {
            return mid
        }
        if (target <= mid) {
            start = mid - 1
        } else {
            end = mid + 1
        }
    }
    return -1
}


const arr = [1, 2, 3, 3, 4, 5]
console.log(binary(arr, 9))