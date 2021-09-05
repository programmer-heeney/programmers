function solution(x, n) {
    var answer = [];
    let i = 0;
    while (i++ < n) {
        answer.push(x * i);
    }
    return answer;
}