// 프로그레머스 - 네트워크
function solutionOfNetwork(n: number, computers: number[][]) {
  let answer = 0;
  let visited = new Array(n).fill(false);
  const dfs = (row: number) => {
    visited[row] = true;
    for (let col = 0; col < n; col++) {
      const cur = computers[row][col];
      if (row !== col && cur === 1 && !visited[col]) {
        dfs(col);
      }
    }
  };

  for (let row = 0; row < n; row++) {
    if (!visited[row]) {
      dfs(row);
      answer++;
    }
  }
  return answer;
}

describe('Network', () => {
  test('case1', () => {
    expect(
      solutionOfNetwork(3, [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
      ])
    ).toBe(2);
  });

  test('case2', () => {
    expect(
      solutionOfNetwork(3, [
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
      ])
    ).toBe(1);
  });
});
