// add whatever parameters you deem necessary
function countPairs(arr, num) {
    let count = 0
    for (let i=0; i < arr.length; i++) {
        for (let j=i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) count ++
        }
    }
    return count
}

countPairs([3,1,5,4,2], 6)

module.exports = {countPairs}