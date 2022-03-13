const solutionOf거리두기 = (places) => {
  const checkIsOk = (place, row, col) => {
    // 상하좌우 판단
    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];
    for (let i = 0; i < 4; i++) {
      const nr = row + dr[i];
      const nc = col + dc[i];
      if (nr < 0 || nr > 4 || nc < 0 || nc > 4) continue;
      const cur = place[nr][nc];
      if (cur === 'P') return false;
      if (
        cur === 'O' &&
        nr + dr[i] >= 0 &&
        nr + dr[i] <= 4 &&
        nr + dc[i] >= 0 &&
        nr + dc[i] <= 4 &&
        place[nr + dr[i]][nc + dc[i]] === 'P'
      ) {
        return false;
      }
    }
    // 대각선 판단
    dr = [-1, -1, 1, 1];
    dc = [-1, 1, -1, 1];
    const r1 = [0, -1, 0, 1];
    const c1 = [-1, 0, -1, 0];
    const r2 = [-1, 0, 1, 0];
    const c2 = [0, 1, 0, 1];
    for (let i = 0; i < 4; i++) {
      const nr = row + dr[i];
      const nc = col + dc[i];
      if (nr < 0 || nr > 4 || nc < 0 || nc > 4) continue;
      const cur = place[nr][nc];
      if (cur === 'P') {
        // 양 옆에 파티션인지 판단.
        const or = row + r1[i];
        const oc = col + c1[i];
        const or2 = row + r2[i];
        const oc2 = col + c2[i];
        if (
          (or >= 0 && or <= 4 && oc >= 0 && oc <= 4 && place[or][oc] !== 'X') ||
          (or2 >= 0 && or2 <= 4 && oc2 >= 0 && oc2 <= 4 && place[or2][oc2] !== 'X')
        ) {
          return false;
        }
      }
    }
    return true;
  };

  const result = [];
  places.forEach((place) => {
    let flag = true;
    case1: for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (place[row][col] === 'P') {
          if (!checkIsOk(place, row, col)) {
            result.push(0);
            flag = false;
            break case1;
          }
        }
      }
    }
    if (flag) {
      result.push(1);
    }
  });

  return result;
};
