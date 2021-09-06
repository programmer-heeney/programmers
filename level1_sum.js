function solution(n) {
    var answer = 0;
    answer = n.toString().split('').map(value => +value).reduce((acc, cur) => acc + cur);
    return answer;
}

// 나머지 연산 이용
// function solution(n) {
//     var answer = 0;
//     while (n > 0) {
//         answer = answer + (n % 10);
//         n = Math.floor(n / 10);
//     }
//     return answer;
// }