
// Factorial of a Number using Recursion

function fact(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    return n * fact(n - 1)
}

console.log(fact(4))
