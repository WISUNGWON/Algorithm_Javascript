
// 프로그래머스 최댓값과 최솟값;

function solution(s) {
    const arr = s.split(" ");
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    arr.forEach((val) => {
        const num = Number(val)
        if (min > num) min = num;
        if (max < num) max = num;
    })
    return `${min} ${max}`
}