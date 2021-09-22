function solution(absolutes, signs) {
    var answer = 0;
    signs.forEach((sign, i) => {
        answer += sign ? absolutes[i] : -absolutes[i];
    })
    return answer;
}
console.log(solution([4, 7, 12], [true, false, true]))