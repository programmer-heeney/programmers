function solution(n, lost, reserve) {
    var answer = 0;
    let arr = new Array(n).fill(1);

    reserve.forEach(num => {
        arr[num - 1]++;
    })

    lost.forEach(num => {
        arr[num - 1]--;
    })

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 1) {
            if (arr[i - 1] !== undefined && arr[i - 1] < 1) {
                arr[i]--;
                arr[i - 1]++;
            } else if (arr[i] > 1 && arr[i + 1] !== undefined && arr[i + 1] < 1) {
                arr[i]--;
                arr[i + 1]++;
            }
        }
    }

    answer = arr.filter(n => n > 0).length;
    return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
console.log(solution(1, [1], [1]));