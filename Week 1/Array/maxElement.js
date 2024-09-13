
// Find the Maximum Element

function max(num) {
    let max = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    return max;
}

let num = [1, 2, 3, 4, 5];
console.log(max(num)); // Output: 5
