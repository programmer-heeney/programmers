function solution(price, money, count) {
    var answer = -1;
    let cost = [];
    for (let i = 1; i <= count; i++) {
        cost.push(price * i);
    }
    let total = cost.reduce((acc, cur) => acc + cur);
    let sub = total - money;
    answer = sub > 0 ? sub : 0;
    return answer;
}