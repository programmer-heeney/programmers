function solution(a, b) {
    var answer = 0;
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    for (let i = min; i <= max; i++) {
        answer += i;
    }
    return answer;
}

// 수학식으로 계산
// function solution(a, b) {
//     var answer = 0;
//     let max = Math.max(a, b);
//     let min = Math.min(a, b);
//     answer = (max * (max + 1)) / 2 - ((min - 1) * min) / 2;
//     return answer;
// }

// 개선된 수학식
// function solution(a, b) {
//     var answer = 0;
//     answer = (a + b) * (Math.abs(b - a) + 1) / 2;
//     return answer;
// }