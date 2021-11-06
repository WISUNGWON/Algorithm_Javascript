/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    const arr = s.split(" ");
    const objArr = arr.map((val) => {
        const len = val.length - 1;
        const order = Number(val[len]);
        const word = val.slice(0, len);
        return { order, word }
    })
    objArr.sort((a, b) => a.order - b.order)
    return objArr.map((val) => val.word).join(" ")
};