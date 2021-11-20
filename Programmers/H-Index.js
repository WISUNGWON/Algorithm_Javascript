function solution(citations) {
  citations.sort((a, b) => b - a);

  for (let i = citations[0]; i > 0; i--) {
    let cnt = 0;
    for (let j = 0; j < citations.length; j++) {
      if (citations[j] >= i) cnt++;
    }
    if (cnt >= i) return i
  }

  return 0;
}