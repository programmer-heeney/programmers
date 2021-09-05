// js 내장함수 padStart 이용
function solution(phone_number) {
    var answer = '';
    let last4Digits = phone_number.slice(-4);
    answer = last4Digits.padStart(phone_number.length, '*');
    return answer;
}

// 정규표현식 이용
// function solution(phone_number) {
//     var answer = '';
//     let mark = phone_number.replace(/\d{4}$/, '*');
//     let index = mark.indexOf('*');
//     const regex = new RegExp(`^[0-9]{${index}}`);
//     answer = phone_number.replace(regex, '*'.repeat(index));

//     return answer;
// }

// 더 간결한 정규표현식 사용
// function solution(phone_number) {
//     var answer = '';
//     answer = phone_number.replace(/\d(?=\d{4})/g, '*');

//     return answer;
// }