// function divisors(n) {
//     let set = new Set();
//     for (let i = 1; i <= n; i++) {
//         n % i === 0 && set.add(i);
//     }
//     return set.size;
// }
function divisors(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        n % i === 0 && count++;
    }
    return count;
}
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        let nums = divisors(i);
        answer = nums % 2 ? answer - i : answer + i;
    }
    return answer;
}

// n의 제곱근이 정수면 n의 약수는 홀수
// Number.isInteger(Math.sqrt(n))