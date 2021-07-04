function solution(food_times, k) {
  let answer = -1;
  let len = food_times.length;
  let sortedFoods = food_times
    .map((f, index) => [f, index + 1])
    .sort((a, b) => a[0] - b[0]);

  let [pretime, i] = [0, 0];
  for (let f of sortedFoods) {
    let diff = f[0] - pretime;
    if (diff !== 0) {
      let spend = diff * len;
      if (spend <= k) {
        k -= spend;
        pretime = f[0];
      } else {
        k %= len;
        const arr = sortedFoods
          .slice(i, food_times.length)
          .sort((a, b) => a[1] - b[1]);
        console.log(arr);
        return arr[k][1];
      }
    }
    ++i;
    --len;
  }
  return answer;
}

console.log(solution([3, 1, 2], 5));
