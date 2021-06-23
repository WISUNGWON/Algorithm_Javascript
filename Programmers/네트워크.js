function solution(n, computers) {
  let answer = 0;
  function dfs(comps, num) {
    if (comps[num][num] === 0) {
      return false;
    }
    comps[num][num] = 0;
    for (let i = 0; i < comps.length; i++) {
      if (comps[num][i]) {
        dfs(comps, i);
      }
    }

    return true;
  }

  for (let i = 0; i < n; i++) {
    if (computers[i][i] === 1 && dfs(computers, i)) {
      answer++;
    }
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
