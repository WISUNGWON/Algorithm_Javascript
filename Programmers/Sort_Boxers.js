// 위클리 테스트 복서 정렬하기
function solution(weights, head2head) {
    var answer = [];
    const len = weights.length;
    const node = [];
    for (let i = 0; i < len; i++) {
        const curPlayerHeads = head2head[i];
        const curPlayerWeight = weights[i];
        let cntWin = 0;
        let cntHandyWin = 0;
        let cntLose = 0;
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

            if (curHead === "L") cntLose++;
        }
        node.push({
            cntWinRate: cntWin / (cntWin + cntLose),
            cntHandyWin,
            weight: curPlayerWeight,
            idx: i + 1,
        });
    }

    node.sort((a, b) =>
        b.cntWinRate - a.cntWinRate || b.cntHandyWin - a.cntHandyWin || b.weight - a.weight || a.idx - b.idx
    );

    answer = node.map((val) => val.idx);
    return answer;
}