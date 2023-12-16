// add whatever parameters you deem necessary
function averagePair(arr, target) {
    const ceiling = arr.length - 1
    for (let i=0; i <= Math.floor(arr.length / 2); i++) {
        if ((arr[i] + arr[ceiling - i] / 2) == target) return true
    }
    return false
}

module.exports = {averagePair}
