const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ');
const trees = input[0].split(' ').map(Number).sort((a,b) => a-b);

function solution(arr, target) {
    let start = 0;
    let end = arr[arr.length-1];
    let answer = 0;

    while(start <= end) {
        let mid = Math.floor((start + end)/2);
        let sum = 0;
        for(let x of arr) {
            if(x > mid) sum += x-mid;
        }

        if(sum >= target) {
            if(mid > answer) answer = mid; 
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return answer;
}

console.log(solution(trees, M))