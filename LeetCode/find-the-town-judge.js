var findJudge = function (n, trust) {
  if (n === 1) {
    return 1;
  }

  // 각 사람들의 투표여부 및 투표 받은 내용 2차원 배열에 저장
  let visited = [[0, 0]];
  for (let i = 0; i < n; i++) {
    visited.push([0, 0]);
  }

  for (let i = 0; i < trust.length; i++) {
    let left = trust[i][0];
    let right = trust[i][1];
    visited[left][0] = 1;
    visited[right][1] += 1;
  }

  let mostTrusted = 1;
  let max = visited[1][1];
  for (let i = 1; i < visited.length; i++) {
    if (max < visited[i][1]) {
      max = visited[i][1];
      mostTrusted = i;
    }
  }

  if (n - 1 === max && visited[mostTrusted][0] === 0) {
    return mostTrusted;
  } else {
    return -1;
  }
};

const i = findJudge(2, [[1, 2]]);
console.log(i);
