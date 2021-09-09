function solution(x) {
    var answer = true;
    const X = x;
    let sum = 0;
    while (x > 0) {
        sum = sum + x % 10;
        x = Math.floor(x / 10);
    }
    answer = X % sum === 0 ? true : false;
    return answer;
}

console.time('test');
solution(100);
console.timeEnd('test');