function solution(arr) {
    var answer = 0;
    let sum = arr.reduce((acc, cur) => acc + cur, 0);
    answer = sum / arr.length;
    return answer;
}

// reduce를 이용해 배열의 합을 구한 후 arr.length로 나눠서 평균값 계산
// function solution(arr) {
//     var answer = 0;
//     let sum = arr.reduce((acc, cur) => {
//         return acc = acc + cur;
//     }, 0);
//     answer = sum / arr.length;
//     return answer;
// }
