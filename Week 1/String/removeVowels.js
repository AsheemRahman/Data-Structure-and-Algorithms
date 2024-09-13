// iterative approach

function removeVowels(str) {
    let vowels = 'aeiouAEIOU'
    let result = ''

    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result += str[i]
        }
    }
    return result
}

console.log(removeVowels('appletree'))


// BigO - O(n2)

console.log(removeVowels('hello WOrld', 0))

// recursive approach

function removeVowels(str, index) {
    if (index >= str.length) {
        return str
    }
    let vowels = 'aeiouAEIVOU'
    if (vowels.includes(str[index])) {
        str = str.slice(0, index) + str.slice(index + 1)
        return removeVowels(str, index)
    } else {
        return removeVowels(str, index + 1)
    }
}

console.log(removeVowels('hello WOrld', 0))





