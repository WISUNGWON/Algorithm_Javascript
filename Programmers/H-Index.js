function solution(citations) {
  citations.sort((a, b) => b - a);
  let len = citations.length;
  for (let i = citations[0]; i >= 0; i--) {
    let upCnt = 0;
    for (let j = 0; j < len; j++) {
      if (citations[j] >= i) {
        upCnt++;
      }
    }
    // 끝나는지 체크
    if (upCnt >= i) {
      return i;
    }
  }
}

console.log(solution([1, 1, 1, 0, 0])); // 1
console.log(solution([0, 0, 1, 2, 3])); // 0 (1)
console.log(solution([5, 5, 5, 5, 5])); // 0 (1)
console.log(solution([6, 5, 4, 1, 0])); // 0 (1)
