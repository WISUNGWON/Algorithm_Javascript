function solutionOf문자열압축(s: string) {
  var answer = Number.MAX_SAFE_INTEGER;
  for (let abbUnit = 1; abbUnit <= s.length; abbUnit++) {
    let abbreviatedStr = '';
    for (let i = 0; i < s.length; i += abbUnit) {
      const cur = s.slice(i, i + abbUnit);
      let abbCount = 1;
      let j = i + abbUnit;
      while (s.length > j) {
        const next = s.slice(j, j + abbUnit);
        if (cur !== next) break;
        abbCount++;
        j += abbUnit;
      }
      if (abbCount === 1) {
        abbreviatedStr += cur;
      } else {
        abbreviatedStr += abbCount + cur;
      }
      i = j - abbUnit;
    }
    answer = Math.min(answer, abbreviatedStr.length);
  }
  return answer;
}

describe('solution of 문자열압축', () => {
  test('case1', () => {
    expect(solutionOf문자열압축('aabbaccc')).toBe(7);
  });

  test('case2', () => {
    expect(solutionOf문자열압축('ababcdcdababcdcd')).toBe(9);
  });
});
