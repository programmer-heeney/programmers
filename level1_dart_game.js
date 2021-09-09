// 객체를 이용해서 코드 간결화
function solution(dartResult) {
    var answer = 0;
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
        options = { '*': 2, '#': -1 };
    const darts = dartResult.split('');
    const calc = [];
    const nums = dartResult.split(/[^0-9]/).filter(value => value !== '');
    let j = 0;

    darts.forEach((value, i) => {
        if (/[S|D|T]/.test(value)) {
            calc.push(nums[j] ** bonus[value]);
            j++;
        }
        if (/[*|#]/.test(value)) {
            let idx = j - 1;
            calc[idx] = calc[idx] * options[value];
            if (value === '*' && j - 1 !== 0) {
                calc[idx - 1] = calc[idx - 1] * 2;
            }
        }
    })
    answer = calc.reduce((arr, cur) => arr + cur);
    return answer;
}

// function solution(dartResult) {
//     var answer = 0;
//     const arr = dartResult.split('');
//     const calc = [];
//     const nums = dartResult.split(/[^0-9]/).filter(value => value !== '');
//     let j = 0;

//     arr.forEach((value, i) => {
//         if (/[S]/.test(value)) {
//             calc.push(nums[j] ** 1);
//             j++;
//         }
//         if (/[D]/.test(value)) {
//             calc.push(nums[j] ** 2);
//             j++;
//         }
//         if (/[T]/.test(value)) {
//             calc.push(nums[j] ** 3);
//             j++;
//         }
//         if (/[*]/.test(value)) {
//             let idx = j - 1;
//             calc[idx] = calc[idx] * 2;
//             if (j - 1 !== 0) {
//                 calc[idx - 1] = calc[idx - 1] * 2;
//             }
//         }
//         if (/[#]/.test(value)) {
//             let idx = j - 1;
//             calc[idx] = calc[idx] * (-1);
//         }
//     })
//     answer = calc.reduce((arr, cur) => arr + cur);
//     return answer;
// }

console.log(solution("1S2D3T*"));