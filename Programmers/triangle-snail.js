// 프로그래머스 : 삼각달팽이
function solution(n) {
    const map = new Array(n).fill().map((_, i) => new Array(i + 1).fill(0));
    let [cnt, x, y] = [0, -1, 0]
    while (n > 0) {
        for (let i = 0; i < n; i++) {
            map[++x][y] = ++cnt
        };
        for (let i = 0; i < n - 1; i++) {
            map[x][++y] = ++cnt
        };
        for (let i = 0; i < n - 2; i++) {
            map[--x][--y] = ++cnt
        };
        n -= 3;
        console.log(map)
    }
    return map.flatMap(val => val);
}

solution(6)