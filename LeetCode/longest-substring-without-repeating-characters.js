// 비 효율적 시간초과
var lengthOfLongestSubstring = function (s) {
  if (s.length < 1) {
    return s.length;
  }
  // 알파벳에 대한 비지티드
  let visited = Array(26).fill(false);

  let answer = Number.MAX_SAFE_INTEGER;
  for (let i = s.length - 1, j = 0; i >= 0, j < s.length; i--, j++) {
    let z = 0;
    while (z <= j) {
      let str = s.slice(z, i + 1 + z);
      // find output
      let flag = true;
      for (let k = 0; k < str.length; k++) {
        let code = str.charCodeAt(k);
        if (visited[code - 97]) {
          flag = false;
          break;
        }

        visited[code - 97] = true;
      }

      if (flag) {
        return str.length;
      }
      visited = Array(26).fill(false);
      z++;
    }
  }

  return answer;
};

var lengthOfLongestSubstring2 = function (s) {
  let n = s.length,
    ans = 0;
  let index = new Array(26);
  for (let j = 0, i = 0; j < n; j++) {
    if (index[s[j]]) {
      i = Math.max(index[s[j]], i);
    }
    ans = Math.max(ans, j - i + 1);
    index[s[j]] = j + 1;
  }
  return ans;
};

console.log(lengthOfLongestSubstring2('abcabcbb'));
