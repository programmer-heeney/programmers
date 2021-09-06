function solution(n) {
    var answer = 0;
    let sqrt = Math.sqrt(n);
    answer = sqrt % 1 ? -1 : Math.pow(sqrt + 1, 2)
    return answer;
}