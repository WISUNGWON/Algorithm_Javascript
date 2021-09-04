// 프로그래머스 직업군추천하기.

function solution(table, languages, preference) {
    var answer = '';
    // Table을 파싱한 배열을 만든다. -> 각 직업 항목별로 5개의 배열이 나옴.
    let parseTable = [];
    table.map(v => parseTable.push(v.split(" ")))
    // 점수를 더할 배열을 만들어준다. 배열은 0~5 순서대로
    let res = [0, 0, 0, 0, 0];

    // 만들어진 배열로 각언어가 몇번째에 들어가는지 파악해서 점수를 더해준다.
    languages.forEach((l, lidx) => parseTable.forEach((p, categoryIdx) => {
        if (p.includes(l)) {
            res[categoryIdx] += (6 - p.indexOf(l)) * preference[lidx]
        }
    }))
    console.log(res, ": re")
    let maxIdx = 0;
    let max = -1;
    res.forEach((v, idx) => { if (v > max) { maxIdx = idx; max = v; } })
    const jobs = ["SI", "CONTENTS", "HARDWARE", 'PORTAL', "GAME"]
    console.log(maxIdx)
    return jobs[maxIdx];
}

const table = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"]
const la = ["PYTHON", "C++", "SQL"]
const pre = [7, 5, 5]
console.log(solution(table, la, pre))

function solution2(table, languages, preference) {
    const langMap = languages.reduce(
        (obj, lang, idx) => (obj[lang] = preference[idx]) && obj, {});

    let result = '';
    let totalScore = 0;

    table.forEach(one => {
        const [job, ...langs] = one.split(' ');

        let tempScore = langs.reduce((temp, lang, idx) =>
            (temp += (langMap[lang] || 0) * (5 - idx)), 0)

        if (totalScore > tempScore)
            return;

        if (totalScore === tempScore && result > job)
            return result = job;

        if (totalScore < tempScore)
            return (result = job) && (totalScore = tempScore);
    })

    return result;
}