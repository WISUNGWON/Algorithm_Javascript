function solution(s) {
  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i <= s.length; i++) {
    let [ansStr, idx, cnt] = ['', 0, 1];
    while (idx < s.length) {
      let now = s.slice(idx, idx + i);
      idx += i;
      while (now === s.slice(idx, idx + i)) {
        cnt++;
        idx += i;
      }

      ansStr += cnt === 1 ? now : cnt + now;
      cnt = 1;
    }
    answer = Math.min(answer, Number(ansStr.length));
  }
  return answer;
}

console.log(solution('aabbaccc'));
