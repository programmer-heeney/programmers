function solution(s) {
    var answer = '';
    let str = s.split('');
    answer = str.sort((a, b) => a < b ? 1 : -1).join('');
    return answer;
}