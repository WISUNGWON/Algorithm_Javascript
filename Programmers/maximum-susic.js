// 프로그래머스 수식 최대화

const operations = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["-", "+", "*"],
    ["-", "*", "+"],
]
const parseStrToArrDividedWithNumAndOp = (str) => {
    let arr = [];
    let num = "";
    for (let i = 0; i < str.length; i++) {
        const val = str[i];
        if (isNaN(val)) {
            arr.push(...[num, val]);
            num = "";
        } else {
            num += val;
        }
    }
    arr.push(num);
    return arr;
}
const calculateByOp = (op, a, b) => {
    switch (op) {
        case "+":
            return a + b;
        case "*":
            return a * b;
        case "-":
            return a - b;
    }
}
const calculateArrWithOp = (arr, priorOp) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === priorOp) {
            const newNum = calculateByOp(priorOp, Number(arr[i - 1]), Number(arr[i + 1]))
            arr = [...arr.slice(0, i - 1), newNum, ...arr.slice(i + 2, arr.length)]
            return calculateArrWithOp(arr, priorOp)
        }
    }
    return arr
}
const getCalculatedNumber = (arr, opArr) => {
    let targetArr = [...arr];
    opArr.forEach((priorOp) => {
        targetArr = calculateArrWithOp(targetArr, priorOp)
    })
    return targetArr[0];
}
function solution(expression) {
    let max = -1;
    const arr = parseStrToArrDividedWithNumAndOp(expression);
    operations.forEach((opArr) => {
        const calculatedNum = Math.abs(getCalculatedNumber(arr, opArr))
        if (calculatedNum > max) {
            max = calculatedNum
        }
    })
    return max;
}