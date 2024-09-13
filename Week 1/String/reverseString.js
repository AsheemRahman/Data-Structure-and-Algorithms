// reverse a string using recursion

function reverseRecur(str) {
    if (str.length <= 1) {
        return str
    }
    return reverseRecur(str.substr(1)) + str.charAt(0)
}

console.log(reverseRecur('Abcdefg'))
