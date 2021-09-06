function solution(arr) {
    var answer = [];
    let min = arr.reduce((acc, cur) => {
        return acc = Math.min(acc, cur);
    })

    answer = arr.filter(value => value !== min);
    if (!answer.length) answer = [-1];
    return answer;
}

// 불필요한 작업 줄이기
// function solution(arr) {
//     var answer = [];
//     if (arr.length <= 1) return [-1];

//     let min = arr.reduce((acc, cur) => {
//         return acc = Math.min(acc, cur);
//     })

//     answer = arr.filter(value => value !== min);
//     return answer;
// }
