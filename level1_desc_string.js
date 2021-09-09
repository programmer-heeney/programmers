// split 체이닝
function solution(s) {
    var answer = '';
    answer = s.split('').sort((a, b) => a < b ? 1 : -1).join('');
    return answer;
}

// function solution(s) {
//     var answer = '';
//     let str = s.split('');
//     answer = str.sort((a, b) => a < b ? 1 : -1).join('');
//     return answer;
// }