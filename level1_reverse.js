function solution(n) {
    var answer = [];
    answer = n.toString().split('').reverse().map(value => +value);
    return answer;
}