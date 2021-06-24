// 프로그래머스 2020 카카오 인턴십 경주로건설

function solution(board) {
  var answer = Number.MAX_SAFE_INTEGER;
  let len = board.length;
  // 상, 우, 하, 좌
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  // 2차원 배열로 visited 선언
  let visited = new Array(len);

  for (var i = 0; i < visited.length; i++) {
    visited[i] = new Array(len).fill(false);
  }
  function bfs() {
    let q = [];
    // 3번째 값이 0이면 이전에 (상하), 1이면 (좌우)
    let visited = new Array(len);

    for (var i = 0; i < visited.length; i++) {
      visited[i] = new Array(len).fill(false);
    }
    visited[0][0] = true;
    // x, y, 전 방향, 직선
    q = [[0, 0, 0, 0, visited]];
    while (q.length > 0) {
      let curNode = q.pop();
      let cx = curNode[0];
      let cy = curNode[1];
      let pd = curNode[2]; // previousDirection
      let cm = curNode[3]; // currentMoney
      let cVisited = curNode[4];
      if (cx === len - 1 && cy === len - 1) {
        // 마지막이므로
        if (answer > cm) {
          answer = cm;
        }
      } else {
        for (let i = 0; i < 4; i++) {
          let nx = cx + dx[i];
          let ny = cy + dy[i];
          if (nx >= 0 && ny >= 0 && nx < len && ny < len) {
          }
          if (
            nx >= 0 &&
            ny >= 0 &&
            nx < len &&
            ny < len &&
            board[nx][ny] === 0 &&
            !cVisited[nx][ny]
          ) {
            // 갈 수 있으면 연결 , push
            // 연결 할 때 직선, 곡선 파악
            // 0 (상하)
            let nd = pd;
            let nm = cm;
            if (pd === 0 && (i === 1 || i === 3) && cx !== 0 && cy !== 0) {
              nd = 1;
              nm += 500;
            }

            if (pd === 1 && (i === 0 || i === 2) && cx !== 0 && cy !== 0) {
              nd = 0;
              nm += 500;
            }

            // 직선 값 계산
            // newM을 넣어줄 때 둘중에 최소값을 넣어주어야 함.
            nm += 100;
            let newVisited = [...cVisited];
            newVisited[nx][ny] = true;
            q.push([nx, ny, nd, nm, newVisited]);
          }
        }
      }
    }
  }
  bfs();
  return answer;
}

// console.log(
//   solution([
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0],
//   ])
// );

// console.log(
//   solution([
//     [0, 0, 1, 0],
//     [0, 0, 0, 0],
//     [0, 1, 0, 1],
//     [1, 0, 0, 0],
//   ])
// );
console.log(
  solution([
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
  ])
);
// console.log(
//   solution([
//     [0, 0, 0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0, 1],
//     [0, 0, 1, 0, 0, 0, 1, 0],
//     [0, 1, 0, 0, 0, 1, 0, 0],
//     [1, 0, 0, 0, 0, 0, 0, 0],
//   ])
// );
