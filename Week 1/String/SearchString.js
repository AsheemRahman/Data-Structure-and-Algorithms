// search char in string

function searchString(str, target) {

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === target) {
            return i
        }
    }
    return -1
}
console.log(searchString(['apple', 'pineapple', 'oragnge', 'grape'], 'magngo'))


// search char in string

function searchChar(str, t) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === t) {
            return i
        }
    }
    return -1
}
console.log(searchChar('abcedfghi', 'h'))



// search second occurance of the char in a string

function firstOccurence(str, t) {
    let count = 0

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === t) {
            count++
            if (count === 2) {
                return i
            }
        }
    }
    return -1
}


console.log(firstOccurence('i am  Developer', 'a'))
