// add whatever parameters you deem necessary
function makeFreqCounter(str) {
    let freq = {}
    for (let ltr of str) {
        let ltrCount = freq[ltr] || 0
        freq[ltr] = ltrCount + 1 
    }
    return freq
}

function constructNote(msg, letters) {
    const msgFreq = makeFreqCounter(msg)
    const lettersFreq = makeFreqCounter(letters)
    for (let key in msgFreq) {
        if (!lettersFreq[key] || lettersFreq[key] < msgFreq[key]) {
            return false
        }
    }
    return true
}

module.exports = {constructNote}