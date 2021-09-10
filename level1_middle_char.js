function solution(s) {
    var answer = '';
    const middle = s.length / 2;
    answer = s.length % 2 ? s.slice(middle, middle + 1) : s.slice(middle - 1, middle + 1);
    return answer;
}