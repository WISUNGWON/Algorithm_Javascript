// 프로그래머스: 구명보트

function solution(people, limit) {
	let answer = 0
    people.sort((a, b) => a - b)
    let left = 0
    let right = people.length - 1
    
    while(left < right){
    	let sum = people[left] + people[right]
        if(sum > limit){
            right--
        } else {
        	left++
            right--
        }
        answer++
    }
    if(left === right) answer++
    return answer
}