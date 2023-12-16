// add whatever parameters you deem necessary
function makeFreq(arr) {
    let freq = {}
    for (let num of arr) {
        let numCount = freq[num] || 0
        freq[num] = numCount + 1 
    }
    return freq
}

function sameFrequency(num1, num2) {
    const str1 = num1.toString()
    const str2 = num2.toString()
    if (str1.length !== str2.length) return false
    const num1Freq = makeFreq(str1.split(''))
    const num2Freq = makeFreq(str2.split(''))
    for (let key in num1Freq) {
        if (!num2Freq[key] || num2Freq[key] !== num1Freq[key]) return false
    }
    return true
}

module.exports = {sameFrequency}
