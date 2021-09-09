function solution(arr, divisor) {
    var answer = [];
    answer = arr.filter(value => value % divisor === 0).sort((a, b) => a - b);
    if (answer.length < 1) return [-1];
    return answer;
}

// 삼항 연산자 사용
function solution(arr, divisor) {
    var answer = [];
    answer = arr.filter(value => value % divisor === 0);
    return answer.length < 1 ? [-1] : answer.sort((a, b) => a - b);
}