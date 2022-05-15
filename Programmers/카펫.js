// REF : https://programmers.co.kr/learn/courses/30/lessons/42842#
function solution(brown, yellow) {
    var answer = [];
    for (let i = 3; i < 2000; i++) {
        if ((brown - i * 2) / 2 === yellow / (i - 2)) {
            return [(brown - i * 2) / 2 + 2, i]
        }
    }
    return answer;
}