function solution(s) {
    var answer = '';
    let word = s.split(' ');
    answer = word.map(str => {
        let temp = str.split('');
        for (let i = 0; i < str.length; i++) {
            if (i % 2) {
                temp.splice(i, 1, temp[i].toLowerCase());
            } else {
                temp.splice(i, 1, temp[i].toUpperCase());
            }
        }
        return temp.join('');
    }).join(' ');
    return answer;
}

console.log(solution("try hello world"));