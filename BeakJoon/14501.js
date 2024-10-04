const input = require('fs').readFileSync('./BeakJoon/14501.txt').toString().split('\n');
const [n, ...table] = input

const N = Number(n);
const infos = table.map((data) => data.split(' ').map(Number))

const solution = () => {
  const dp = Array(N).fill(0); // 객체를 넣을 경우 참조만 복사해서 값을 채움 (주소값이 다 같음)

  for (let i = 0; i < N; i++) {
    const [time, profit] = infos[i];
    if (i + time > N) continue;
    dp[i] += profit;
    for (let j = i + time; j < N; j++) {
      dp[j] = Math.max(dp[j], dp[i]);
    }
  }


  console.log(Math.max(...dp))
}

solution()