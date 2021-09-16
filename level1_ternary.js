function solution(n) {
    var answer = 0;
    let ternary = n.toString(3).split('').reverse();
    ternary.forEach((value, i) => {
        answer += (+value) * (3 ** (ternary.length - i - 1));
    })
    return answer;
}

// pareInt(문자열, 기수)
// function solution(n) {
//     return parseInt([...n.toString(3)].reverse().join(""), 3);
// }

console.log(solution(45));