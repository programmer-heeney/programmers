// function binary(n, value) {
//     let str = '';
//     while (value > 0) {
//         str += value % 2;
//         value = Math.floor(value / 2);
//     }
//     str = str.split('').reverse().join('');
//     str = str.padStart(n, 0);
//     return str.split('');
// }

// function solution(n, arr1, arr2) {
//     const map1 = arr1.map(value => binary(n, value))
//     const map2 = arr2.map(value => binary(n, value));
//     const map = map1.map((value, i) => {
//         let str = '';
//         for (let j = 0; j < n; j++) {
//             str += ((+value[j]) + (+map2[i][j]) ? '#' : ' ');
//         }
//         return str;
//     })
//     return map;
// }


// 비트단위 OR 연산자 이용
// 있으면 1, 없으면 0 으로 표기하면 되니까 행렬의 덧셈이 아니라 비트 연산자 OR을 이용하는 것이 더 간단
// Number.prototype.toString(표현하고 싶은 진수의 기수)
function solution(n, arr1, arr2) {
    return arr1.map((value, i) => (value | arr2[i]).toString(2).padStart(n, 0).replace(/1|0/g, a => +a ? '#' : ' '));
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));