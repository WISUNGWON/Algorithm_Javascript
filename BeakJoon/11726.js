import fs from 'fs'

const input = fs.readFileSync('./BeakJoon/11726.txt').toString().trim();

const solution = () => {
	const dp = Array(input + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= input; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }

  console.log(dp[input]);
}

console.log(solution())