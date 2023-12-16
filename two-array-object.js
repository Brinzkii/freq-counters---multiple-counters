// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let result = {}
    for (let i=0; i < arr1.length; i++) {
        let val = arr2[i] || null
        if (!arr1[i]) return result
        result[arr1[i]] = val
    }
    return result
}

module.exports = {twoArrayObject}
