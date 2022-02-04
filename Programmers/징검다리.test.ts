// 프로그래머스 - 징검다리
// programmers.co.kr/learn/courses/30/lessons/43236?language=java

function solutionOf징검다리(distance: number, rocks: number[], n: number) {
  var answer = 0;
  rocks.sort((a, b) => a - b);
  rocks.push(distance);
  let left = 0;
  let right = distance;
  let middle;
  while (left !== right) {
    middle = Math.floor((left + right) / 2);
    let chance = n;
    let here = 0;
    for (let i = 0; i < rocks.length; i++) {
      const gap = rocks[i] - here;
      if (gap < middle) {
        chance--;
      } else {
        here = rocks[i];
      }
    }

    if (chance < 0) {
      right = middle;
    } else {
      answer = Math.max(answer, middle);
      left = middle + 1;
    }
  }
  return answer;
}

describe('solution of 징검다리', () => {
  test('case1', () => {
    expect(solutionOf징검다리(25, [2, 14, 11, 21, 17], 2)).toBe(4);
  });

  test('case2', () => {
    expect(solutionOf징검다리(10, [3, 5, 7], 2)).toBe(5);
  });
});
