// paindrome string

function palindrome(str) {
    let len = str.length

    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return "not palindrome"
        }
    }
    return "palindrome"

}

console.log(palindrome("malayalam"))
console.log(palindrome("car"))


// palindrome recursive

function recursionPalin(str) {

    if (str.length <= 1) {
        return "palindrome"
    }

    if (str[0] === str[str.length - 1]) {
        return recursionPalin(str.slice(1, -1))
    }

    return "not palindrome"
}

console.log(recursionPalin("malayalam"))