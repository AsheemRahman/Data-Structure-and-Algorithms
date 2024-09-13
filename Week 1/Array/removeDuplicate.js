// remove duplicates from array

function removedupli(nums) {

    let arr = []

    for (let i = 0; i < nums.length; i++) {
        if (arr.indexOf(nums[i]) === -1) {
            arr.push(nums[i])
        }
    }
    return arr

}
console.log(removedupli([2, 4, 5, 4, 6, 6, 3, 7]))