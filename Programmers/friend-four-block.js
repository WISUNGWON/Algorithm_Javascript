// 프로그래머스 : 프렌즈4블록

function solution(m, n, board) {
    var answer = 0;
    // 1. board를 2차원 배열로 변환(boardArr)
    let boardArr = board.map((str) => str.split(""));
    const checkCanMakeFourBlock = (arr, friend, x, y) => {
        if (friend !== "" && friend === arr[x][y + 1] && friend === arr[x + 1][y] && friend === arr[x + 1][y + 1]) {
            return true
        }
        return false;
    }
    const DropBlockToEmptySpace = (arr) => {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                const friend = arr[j][i];
                if (friend === "") {
                    let z = j;
                    while(z - 1 >= 0 && z - 1 !== "") {
                        z--;
                        let temp = arr[z][i];
                        arr[z][i] = "";
                        arr[z + 1][i] = temp;
                    }
                }
            }
        }
    }
    let deletedArr = [];
    while (true) {
    // 2. 변환된 배열을 0,0 -> m - 1, n - 1까지 순회하면서 4블록을 만들 수 있는 경우를 체크
        for (let x = 0; x < m - 1; x++) {
            for (let y = 0; y < n - 1; y++) {
                const friend = boardArr[x][y];
                if (checkCanMakeFourBlock(boardArr, friend, x, y)) {
                // 3. 체크된 범위를 객체화하여 지워질 배열(deletedArr)에 저장
                    deletedArr.push([{ x, y }, { x: x + 1, y }, { x, y: y + 1 }, { x: x + 1, y: y + 1 }])
                }
            }
        }
        if (deletedArr.length === 0) break;
        // 4. deletedArr를 순회하면서 boardArr의 공간을 비움
        deletedArr.forEach((posArr) => {
            posArr.forEach((pos) => {
                boardArr[pos.x][pos.y] = "";
            })
        })
        // 5. 비워진 공간에 따라 프렌즈들을 빈 공간으로 내림 (DropBlockToEmptySpace)
        DropBlockToEmptySpace(boardArr)
        deletedArr = [];
        // 6. 1 ~ 5의 시행을 더이상 지울 4블록이 없을 때 까지 시행 (deletedArr가 empty일 때)
    }

    // 7. 최종적으로 만들어진 boardArr를 순회하면서 지워진 부분 (빈스트링인 부분)을 카운트
    boardArr.forEach((board) => {
        board.forEach((friend) => {
            if (friend === "") answer++;
        })
    })
    return answer;
}

console.log(solution(4	,5	,["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(solution(6	,5	,["CCZXZ", "CCZXZ", "XXZXZ", "AAZAA", "AAAAA", "ZAAXX"]));