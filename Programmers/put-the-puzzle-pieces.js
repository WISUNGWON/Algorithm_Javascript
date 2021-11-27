// 프로그래머스 : 퍼즐 조각 맞추기
function solution(game_board, table) {
    var answer = -1;
    const len = table.length;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const findPuzzle = (x, y, puzzle, board, len) => {
        if (board[x][y] !== 1) {
            return;
        }
        puzzle.push({ x, y });
        board[x][y] = 0;
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && nx < len && ny >= 0 && ny < len) {
                findPuzzle(nx, ny, puzzle, board, len)
            }
        }
    }
    const findEmpty = (x, y, empty, board, len) => {
        if (board[x][y] !== 0) {
            return;
        }
        empty.push({ x, y });
        board[x][y] = 1;
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && nx < len && ny >= 0 && ny < len) {
                findEmpty(nx, ny, empty, board, len)
            }
        }
    }
    const getMinMax = (arr) => {
        let minX = 51;
        let minY = 51;
        let maxX = -1;
        let maxY = -1;
        arr.forEach(({ x, y }) => {
            if (minX > x) {
                minX = x;
            }
            if (maxX < x) {
                maxX = x;
            }
            if (minY > y) {
                minY = y;
            }
            if (maxY < y) {
                maxY = y;
            }
        })
        return [minX, minY, maxX, maxY]
    }
    const getNormalizedMatrix = (arr) => {
        const [minX, minY, maxX, maxY] = getMinMax(arr);
        const realMaxX = maxX - minX;
        const realMaxY = maxY - minY;
        const n = Math.max(realMaxX, realMaxY) + 1
        let temp = Array.from(Array(n), () => new Array(n).fill(0));
        arr.forEach(({ x, y }) =>
            temp[x - minX][y - minY] = 1
        )
        return temp;
    }
    const getNormalizedObject = (arr) => {
        const [minX, minY, maxX, maxY] = getMinMax(arr);
        return arr.map(({ x, y }) => ({ x: x - minX, y: y - minY }));
    }
    const newTable = [...table];
    const puzzles = [];
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let puzzle = [];
            if (newTable[i][j] === 1) {
                findPuzzle(i, j, puzzle, newTable, len)
                puzzles.push(getNormalizedMatrix(puzzle))
            }
        }
    }
    const newBoard = [...game_board];
    const emptys = [];
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let empty = [];
            if (newBoard[i][j] === 0) {
                findEmpty(i, j, empty, newBoard, len)
                emptys.push(getNormalizedMatrix(empty))
            }
        }
    }
    let sum = 0;
    const checkIsSame = (arr1, arr2) => {
        const nEmpty = getNormalizedObject(arr1);
        const nPuzzle = getNormalizedObject(arr2);
        const gijun = (a, b) => {
            if (a.x > b.x) return 1
            if (b.x > a.x) return -1
            if (a.y > b.y) return 1
            if (b.y > a.y) return -1
        }
        nEmpty.sort(gijun)
        nPuzzle.sort(gijun)
        let flag = true;
        for (let i = 0; i < nEmpty.length; i++) {
            if (nEmpty[i].x !== nPuzzle[i].x || nEmpty[i].y !== nPuzzle[i].y) {
                flag = false;
            }
        }
        return flag
    }
    const rotate = (arr) => {
        const len = arr.length;
        let newArr = Array.from(Array(len), () => new Array(len))
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                newArr[j][len - 1 - i] = arr[i][j];
            }
        }
        return newArr;
    }
    const canPutInTheBoard = (empty, curPuzzle) => {
        const newLen = empty.length;
        let curNewPuzzle = curPuzzle.map(val => val.slice());
        let ePuzzle = [];
        for (let i = 0; i < newLen; i++) {
            for (let j = 0; j < newLen; j++) {
                if (curNewPuzzle[i][j] === 1) {
                    findPuzzle(i, j, ePuzzle, curNewPuzzle, newLen)
                }
            }
        }
        let newEmpty = empty.map(val => val.slice());
        let eEmpty = [];
        for (let i = 0; i < newLen; i++) {
            for (let j = 0; j < newLen; j++) {
                if (newEmpty[i][j] === 1) {
                    findPuzzle(i, j, eEmpty, newEmpty, newLen)
                }
            }
        }
        if (checkIsSame(eEmpty, ePuzzle)) {
            return true;
        }
        let newPuzzle = curPuzzle.map(val => val.slice());
        for (let i = 0; i < 3; i++) {
            newPuzzle = rotate(newPuzzle)
            let puzzle2 = [];
            let newRPuzzle = newPuzzle.map(val => val.slice());
            for (let i = 0; i < newLen; i++) {
                for (let j = 0; j < newLen; j++) {
                    if (newRPuzzle[i][j] === 1) {
                        findPuzzle(i, j, puzzle2, newRPuzzle, newLen)
                    }
                }
            }
            if (checkIsSame(eEmpty, puzzle2)) {
                return true;
            }
        }
        return false;
    }

    let newEmptys = [...emptys];
    for (let i = 0; i < puzzles.length; i++) {
        const curPuzzle = puzzles[i];
        let puzzleNums = -1;
        let index = -1;
        newEmptys.find((empty, idx) => {
            const eNum = empty.flat().reduce((acc, cur) => acc + cur)
            const pNum = curPuzzle.flat().reduce((acc, cur) => acc + cur)
            if (empty.length === curPuzzle.length && pNum === eNum) {
                if (canPutInTheBoard(empty, curPuzzle)) {
                    puzzleNums = pNum
                    index = idx;
                    return true;
                }
            }
        })
        if (index >= 0) {
            sum += puzzleNums
            newEmptys.splice(index, 1);
        }
    }
    if (sum > answer) {
        answer = sum;
    }
    return answer;
}