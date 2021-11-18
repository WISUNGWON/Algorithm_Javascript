// 프로그래머스 : 피로도
function solution(k, dungeons) {
    const len = dungeons.length;
    let visited = new Array(len).fill(false);
    let orderedDungeons = [];
    let answer = -1;

    const getCntOfExplorableDungeons = () => {
        let [cnt, curK] = [0, k]
        orderedDungeons.forEach((arr) => {
            if (curK >= arr[0]) {
                curK -= arr[1];
                cnt++;
            }
        })
        return cnt;
    }
    const explore = (cnt) => {
        if (cnt === len) {
            const cnt = getCntOfExplorableDungeons()
            if (cnt > answer) {
                answer = cnt;
            }
            return
        }
        
        for (let i = 0; i < len; i++) {
            if (visited[i]) {
                continue;
            }
            visited[i] = true;
            orderedDungeons.push(dungeons[i]);
            explore(cnt + 1);
            orderedDungeons.pop();
            visited[i] = false;
        }
    }
    explore(0);
    return answer;
}