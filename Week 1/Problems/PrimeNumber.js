function prime(n, i = 2) {
    if (n < 2) {
        return false
    }
    if (n > Math.sqrt(n)) {
        return true
    }
    if (n % i === 0) {
        return false
    }
    return prime(n, i + 1)
}


console.log(prime(5))