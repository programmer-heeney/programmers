function solution(d, budget) {
    var answer = 0;
    d.sort((a, b) => a - b);
    let sum = 0;
    d.forEach((value, i) => {
        if (sum + value <= budget) {
            sum += value;
            answer++;
        }
    })

    return answer;
}

console.log(solution([2, 2, 3], 10))