// 프로그래머스 문자열압축
function solution(s) {
    let minLen = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= s.length; i++) {
        let [res, char, zipCnt] = ["", s.slice(0, i), 1];
        for (let j = i; j < s.length; j += i) {
            let nextChar = s.slice(j, j + i);
            if (char === nextChar) {
                zipCnt++;
            } else {
                res += zipCnt > 1 ? (zipCnt + char) : char; 
                zipCnt = 1;
                char = nextChar;
            }
        }
        res += zipCnt > 1 ? (zipCnt + char) : char; 
        if (minLen > res.length) {
            minLen = res.length;
            res = "";
        }
    }
    return minLen;
}