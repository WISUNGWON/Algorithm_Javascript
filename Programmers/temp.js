function solution(weights, head2head) {
  const len = weights.length;
  const node = [];
  for (let i = 0; i < len; i++) {
    const curPlayerHeads = head2head[i];
    const curPlayerWeight = weights[i];
    let cntWin = 0;
    let cntHandyWin = 0;
    for (let j = 0; j < len; j++) {
      const curHead = curPlayerHeads[j];
      if (j === i) {
        continue;
      }

      if (curHead === 'W') {
        cntWin++;
        if (curPlayerWeight < weights[j]) {
          cntHandyWin++;
        }
      }
    }
    node.push({
      cntWinRate: cntWin / (len - 1),
      cntHandyWin,
      weight: curPlayerWeight,
      idx: i + 1,
    });
  }

  return node
    .sort(
      (a, b) =>
        b.cntWinRate - a.cntWinRate ||
        b.cntHandyWin - a.cntHandyWin ||
        b.weight - a.weight ||
        a.idx - b.idx
    )
    .map((val) => val.idx);
}

function solution2(weights, head2head) {
  return head2head
    .map((record, i) =>
      record.split('').reduce(
        (acc, v, j) => {
          acc[0] += v === 'W' ? 1 : 0;
          acc[1] += v === 'W' ? (weights[i] < weights[j] ? 1 : 0) : 0;
          acc[2] += v === 'L' ? 1 : 0;
          return acc;
        },
        [0, 0, 0]
      )
    )
    .map((v) => [v[0] / (v[0] + v[2]), v[1]])
    .map((v, i) => [i + 1, { t: v[0], s: v[1], w: weights[i] }])
    .sort(
      (a, b) =>
        b[1].t - a[1].t || b[1].s - a[1].s || b[1].w - a[1].w || a[0] - b[0]
    )
    .map((v) => v[0]);
}

// lesson
// sort에서 다중 조건을 어떻게 줘야 하는지.
// for문을 reduce로 핸들링하는 법.
