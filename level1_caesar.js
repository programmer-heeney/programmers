function solution(s, n) {
    var answer = '';
    n = n % 26;
    s.split('');
    for (let i = 0; i < s.length; i++) {
        if ('a' <= s[i] && s[i] <= 'z' || 'A' <= s[i] && s[i] <= 'Z') {
            let substitution = s.charCodeAt(i) + n;
            if ('a' <= s[i] && substitution > 'z'.charCodeAt(0)) {
                substitution = substitution % 'z'.charCodeAt(0) + 'a'.charCodeAt(0) - 1;
            }
            else if (s[i] < 'a' && substitution > 'Z'.charCodeAt(0)) {
                substitution = substitution % 'Z'.charCodeAt(0) + 'A'.charCodeAt(0) - 1;
            }
            answer += String.fromCharCode(substitution);
        } else {
            answer += s[i];
        }
    }
    return answer;
}