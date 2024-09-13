
//check the word is palindrome or not

function pali(str) {
    if (str.length === 0 || str.length === 1) {
        return true
    }

    if (str[0] === str[str.length - 1]) {
        str = str.slice(1)
        str = str.slice(0, str.length - 1)
        return pali(str)
    } else {
        return false
    }
}

console.log(pali('abcba'))
console.log(pali('absddcba'))
console.log(pali('abccbabda'))