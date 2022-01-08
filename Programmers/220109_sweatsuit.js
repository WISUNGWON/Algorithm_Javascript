// 프로그래머스 : 체육복

function solution(n, lost, reserve) {
    var answer = n;
    const map = new Map();
    // HINT : 자기가 자기 체육복을 도난 당한 경우.
    const newLost = lost.filter((val) => !reserve.includes(val));
    const newReserve = reserve.filter((val) => !lost.includes(val));
    newReserve.forEach((val) => map.set(val, 1));
    newLost.sort((a, b) => a - b).forEach((val) => {
        if (map.get(val - 1)) {
            map.set(val - 1, 0);
        } else if (map.get(val + 1)) {
            map.set(val + 1, 0);
        } else answer--;
    })
    return answer;
}