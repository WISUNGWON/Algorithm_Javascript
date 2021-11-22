function solution(m, n, board) {
    var answer = 0;
    // 1) 2차원 배열 다 돌면서 2 x 2 구역 찾기.
    let newBoard = board.map((str) => str.split(""));
    let deletedArr = [];
    while (true) {
        for (let y = 0; y < newBoard.length - 1; y++) {
            const rows = newBoard[y];
            for (let x = 0; x < rows.length - 1; x++) {
                const curF = rows[x];
                // 2 x 2 구역 판단
                if (curF.charCodeAt(0) <= "Z".charCodeAt(0) && curF.charCodeAt(0) >= "A".charCodeAt(0) && curF !== "" && curF === newBoard[y][x + 1] && curF === newBoard[y + 1][x] && curF === newBoard[y + 1][x + 1]) {
                    // 1-1) 찾은 구역의 인덱스를 x, y로 배열로 만들어서 저장
                    deletedArr.push([{ y, x }, { y: y + 1, x }, { y, x: x + 1 }, { y: y + 1, x: x + 1 }])
                }
            }
        }
        if (deletedArr.length === 0) break;
        // 2) 찾은 2 x 2 구역 지우기.
        deletedArr.forEach((posArr) => {
            posArr.forEach((pos) => {
                newBoard[pos.y][pos.x] = "";
            })
        })
        // 3) 배열 다시 만들기.
        // 3-1) 배열을 row를 기준으로 하나씩 잡고, 요소가 있으면 빈공간으로 넣는 시행을 다 함.
        let secondBoard = [...newBoard];
        for (let i = 0; i < newBoard[0].length; i++) {
            for (let j = 0; j < newBoard.length; j++) {
                const curF = secondBoard[j][i];
                if (curF === "") {
                    let newJ = j;
                    while(newJ - 1 >= 0 && newJ - 1 !== "") {
                        newJ--;
                        let temp = secondBoard[newJ][i];
                        secondBoard[newJ][i] = "";
                        secondBoard[newJ + 1][i] = temp;
                        
                    }
                }
            }
        }
        newBoard = secondBoard;
        deletedArr = [];
    }

    //4) newBoard에서 빈 값 카운트
    newBoard.forEach((board) => {
        board.forEach((fri) => {
            if (fri === "") answer++;
        })
    })
    return answer;
}

console.log(solution(4	,5	,["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(solution(6	,5	,["CCZXZ", "CCZXZ", "XXZXZ", "AAZAA", "AAAAA", "ZAAXX"]));
