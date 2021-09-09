function solution(strings, n) {
    var answer = [];
    strings.sort();
    strings.sort((a, b) => a.charAt(n) < b.charAt(n) ? -1 : 1);
    answer = strings;
    return answer;
}