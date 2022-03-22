function solutionOf게임맵최단거리(maps) {
  var answer = Number.MAX_SAFE_INTEGER;
  const queue = [];
  queue.push({ x: 0, y: 0, count: 1 });
  const n = maps.length;
  const m = maps[0].length;
  let visited = new Array(n).fill(0).map(() => new Array(m).fill(false));
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  while (queue.length > 0) {
    const me = queue.shift();
    const cx = me.x;
    const cy = me.y;
    const count = me.count;
    if (cx === n - 1 && cy === m - 1) {
      answer = Math.min(answer, count);
      continue;
    }

    if (visited[cx][cy]) {
      continue;
    }

    visited[cx][cy] = true;

    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + cx;
      const ny = dy[i] + cy;
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
        queue.push({ x: nx, y: ny, count: count + 1 });
      }
    }
  }
  return answer > 10001 ? -1 : answer;
}
