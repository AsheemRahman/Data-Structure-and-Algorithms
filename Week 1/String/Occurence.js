
// count the couurence of a charachter

function countOccurence(str, t) {

    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === t) {
            count++

        }
    }
    return count

}
console.log(countOccurence('meenakumai', 'm'))


// count the charcters in a word


function charCount(word) {
    let countChar = {}

    for (let char of word) {
        if (countChar[char]) {
            countChar[char]++
        } else {
            countChar[char] = 1
        }

    }
    return countChar

}

console.log(charCount('abcdefg'))