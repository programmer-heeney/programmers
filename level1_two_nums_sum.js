// function solution(numbers) {
//     var answer = [];
//     let arr = [];
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             arr.push(numbers[i] + numbers[j]);
//         }
//     }
//     new Set(arr).forEach(value => answer.push(value));
//     answer.sort((a, b) => a - b);
//     return answer;
// }

// Set을 배열로 만들때 구조분해할당을 사용
function solution(numbers) {
    var answer = [];
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            arr.push(numbers[i] + numbers[j]);
        }
    }
    answer = [...new Set(arr)]
    return answer.sort((a, b) => a - b);
}

console.log(solution([5, 0, 2, 7]))