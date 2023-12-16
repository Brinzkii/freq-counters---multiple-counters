function separatePositive(arr) {
    let temp
    for (let i=0; i < arr.length;  i++) {
        if (arr[i] > 0 && i !== 0) {
            let val = arr.splice(i, 1)
            arr.unshift(val[0])
        }
    }
    return arr
}

separatePositive([2, -1, -3, 6, -8, 10])

module.exports = {separatePositive}