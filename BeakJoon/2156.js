const [n, ...wine] = require('fs').readFileSync('./BeakJoon/2156.txt').toString().trim().split('\n').map(v => +v);
const N = Number(n)


const solution = () => {
  if (N === 1) return wine[0];
  else if (N === 2) return wine[0] + wine[1];

  const dp = new Array(N).fill(0);
  dp[1] = wine[0];
  dp[2] = wine[0] + wine[1];

  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1]; // 현재 포도주를 마시지 않는 경우
    if (dp[i] < wine[i - 1] + dp[i - 2]) { // 현재 포도주와 이전 포도주(최대값)를 마시는 경우
      dp[i] = wine[i - 1] + dp[i - 2];
    }
    if (dp[i] < wine[i - 1] + wine[i - 2] + dp[i - 3]) { // 현재 포도주와 이전 포도주를 마시고 그전의 최대 값을 더하는 경우
      dp[i] = wine[i - 1] + wine[i - 2] + dp[i - 3]
    }
  }
  
  console.log(dp[N]);
};


solution()