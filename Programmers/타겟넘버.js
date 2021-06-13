function solution(numbers, target) {
  let answer = 0;
  function p(step, sum) {
    if (step === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }

    p(step + 1, sum + numbers[step]);
    p(step + 1, sum - numbers[step]);
  }

  p(0, 0);

  return answer;
}
