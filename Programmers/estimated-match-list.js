function solution(n,a,b)
{
    var answer = 0;
    let [A, B] = [a, b];
    while (true) {
        answer++
        const rest = A % 2;
        // 서로 맞붙는 조건 : A가 짝수일 때는 B가 A보다 1작음, 홀수 일 때는 B가 1 큼.
        if ((rest === 0 && A - 1 === B) || (rest === 1 && A + 1 === B)) {
            return answer;
        } else {
            // 맞붙는 조건이 아닐 경우 번호 나눠주기
            A = Math.ceil(A / 2)
            B = Math.ceil(B / 2)
        }
    }
    return answer;
}