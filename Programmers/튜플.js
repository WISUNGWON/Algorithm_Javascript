function solution(s) {
  let answer = [];
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    console.log(i, ': 1');
    if (!isNaN(s[i])) {
      let temp = s[i];
      let j = i + 1;
      while (!isNaN(s[j])) {
        temp += s[j];
        j++;
      }
      i = j - 1;
      let value = map.get(temp);
      value ? map.set(temp, value + 1) : map.set(temp, 1);
    }
  }

  let sortedMapArr = [...map.entries()].sort((a, b) => b[1] - a[1]);
  answer = sortedMapArr.map((v) => Number(v[0]));
  return answer;
}

console.log(solution('{{20,111},{111}}'));
