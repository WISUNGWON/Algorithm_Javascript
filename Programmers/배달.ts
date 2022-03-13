function solutionOf배달(N: number, road: number[][], K: number): number {
  const dp = Array(N).fill(0);
  const map = Array.from(Array(N), () => Array(N).fill(0));
  road.forEach((val) => {
    if (map[val[0] - 1][val[1] - 1] === 0 || map[val[0] - 1][val[1] - 1] > val[2]) {
      map[val[0] - 1][val[1] - 1] = val[2];
      map[val[1] - 1][val[0] - 1] = val[2];
    }
  });
  const dfs = (idx: number, sum: number): void => {
    for (let i = 1; i < N; i++) {
      const cost = map[idx][i];
      const newSum = cost + sum;
      if (map[idx][i] !== 0 && newSum <= K) {
        if (dp[i] === 0 || dp[i] > newSum) {
          dp[i] = newSum;
          dfs(i, newSum);
        }
      }
    }
  };
  dfs(0, 0);

  return dp.reduce((acc, cur) => {
    if (cur > 0) return acc + 1;
    return acc;
  }, 1);
}
