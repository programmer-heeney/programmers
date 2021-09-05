function solution(n, m) {
    var answer = [];
    let min = Math.min(n, m);
    let max = Math.max(n, m);
    let rest = -1;
    do {
        rest = max % min;
        max = min;
        min = rest;
    } while (rest !== 0);
    answer.push(max);
    answer.push(n * m / max);
    return answer;
}