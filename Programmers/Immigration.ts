// 프로그래머스 - 입국심사 (level-3)
function solutionOfImmigration(n: number, times: number[]): number {
  times.sort((a, b) => a - b);
  let left = 1;
  let right = Math.max(...times) * n;
  let mid: number;
  while (left !== right) {
    mid = Math.floor((left + right) / 2);
    const cnt = times.map((time) => Math.floor(mid / time)).reduce((acc, cur) => acc + cur);
    if (cnt >= n) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
