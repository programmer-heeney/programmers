function solution(n) {
    var answer = 0;
    const set = new Set();
    if (n === 1) return 1;
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
            set.add(i);
            set.add(n / i);
        }
    }
    set.forEach(divisor => answer = answer + divisor);
    return answer;
}