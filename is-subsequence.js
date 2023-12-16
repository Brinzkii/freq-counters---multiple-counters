// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let targetIdx = 0
    for (let i=0; i < str2.length; i++) {
        if (str2[i] === str1[targetIdx] && targetIdx === str1.length - 1) return true
        if (str2[i] === str1[targetIdx]) targetIdx++
    }
    return false
}

module.exports = {isSubsequence}
