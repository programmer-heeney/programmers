function solution(arr) {
    var answer = [];
    arr.forEach((value, i) => {
        i === 0 ? answer.push(value) : arr[--i] !== value && answer.push(value);
    })
    return answer;
}