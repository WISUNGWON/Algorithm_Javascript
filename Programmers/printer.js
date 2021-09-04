// 프로그래머스 프린터

// Sudo

// 1. 각 우선순위를 담은 고유 객체를 만들어준다. 
// 2. 우선순위를 내림차순으로 배열한다.
// 3. 내가 인쇄를 요청한 문서를 타겟으로 지정하고. 가장 높은 우선순위를 저장한다.
// 3-1. 현재 인쇄할 문서의 우선순위가 가장 높은 우선순위라면 해당 문서를 출력한다.(배열에서 삭제 & 카운트)
// 3-2. 가장 높은 우선순위이면서 타겟과 같다면 답이므로 현재 카운트를 리턴한다.
// 3-3. 우선순위가 가장 높지 않다면 뒤로 보낸다. 

// Point

// 1. 각 우선순위를 담은 고유 객체를 만들기 때문에 인덱스를 객체에 포함시킬 필요가 없다.
// slice및 push를 이용해 배열을 앞뒤로 조작해야 한다.
function solution(priorities, location) {
    let objArr = priorities.map((pr, idx) => ({ pr }));

    priorities.sort((a, b) => a - b)
    const sortedPrArr = [...priorities];

    let target = objArr[location];
    let answer = 0;
    let maxPr = sortedPrArr.pop();

    while (objArr.length > 0) {
        if (maxPr === objArr[0].pr) {
            answer++;

            if (objArr[0] === target) {
                return answer;
            } else {
                maxPr = sortedPrArr.pop();
                objArr = objArr.slice(1);
            }
        } else {
            const [first, ...others] = objArr;
            others.push(first);
            objArr = others;
        }
    }

    return answer;
}

