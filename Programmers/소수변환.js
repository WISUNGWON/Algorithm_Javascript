function solution(numbers) {
  var answer = 0;
  const numberArr = numbers.split('');
  const arr = [];
  const permutation = (visited, step, maxStep) => {
    if (step === maxStep) {
      arr.push(visited.map((val) => numberArr[val]).join(''));
      return;
    }
    for (let i = 0; i < numberArr.length; i++) {
      const selectedNums = visited.map((val) => (val !== false ? val : -1)).filter((val) => val !== -1);
      if (visited[step] !== false || selectedNums.includes(i)) {
        continue;
      }
      visited[step] = i;
      permutation([...visited], step + 1, maxStep);
      visited[step] = false;
    }
  };
  numberArr.forEach((_, index) => {
    const visited = new Array(index + 1).fill(false);
    permutation(visited, 0, index + 1);
  });
  const set = new Set(arr.map((str) => Number(str)));
  const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }

    return number > 1;
  };
  for (const value of set) {
    if (isPrime(value)) answer++;
  }
  return answer;
}
