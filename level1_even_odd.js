function solution(num) {
    var answer = '';
    answer = num % 2 === 0 ? 'Even' : 'Odd';
    return answer;
}

// 음수의 경우 -2 % 2 는 -0이 나옴
// js가 falsy 하게 보는 값들
// -0, 0, Null, NaN, undefined, false, ''
// function solution(num) {
//     var answer = '';
//     answer = num % 2 ? 'Odd' : 'Even';
//     return answer;
// }