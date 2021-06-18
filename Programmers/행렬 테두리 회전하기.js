function solution(rows, columns, queries) {
  let answer = [];
  let map = [];
  for (let i = 0; i < rows; i++) {
    map.push([]);
    for (let j = 1; j <= columns; j++) {
      map[i].push(j + columns * i);
    }
  }

  for (let i = 0; i < queries.length; i++) {
    const [x1, y1, x2, y2] = queries[i].map((n) => n - 1);
    let min = map[x1][y1],
      temp = map[x1][y1];

    // x2 -> x1 (y1)
    for (let i = x1; i < x2; i++) {
      map[i][y1] = map[i + 1][y1];
      min = Math.min(min, map[i][y1]);
    }

    // y2 -> y1 (x2)
    for (let i = y1; i < y2; i++) {
      map[x2][i] = map[x2][i + 1];
      min = Math.min(min, map[x2][i]);
    }

    // x1 -> x2 (y2)
    for (let i = x2; i > x1; i--) {
      map[i][y2] = map[i - 1][y2];
      min = Math.min(min, map[i][y2]);
    }

    // y1 -> y2 (x1)
    for (let i = y2; i > y1 + 1; i--) {
      map[x1][i] = map[x1][i - 1];
      min = Math.min(min, map[x1][i]);
    }

    map[x1][y1 + 1] = temp;

    answer.push(min);
  }

  return answer;
}

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
);
