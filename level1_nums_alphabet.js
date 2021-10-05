function solution(s) {
    let map = new Map();
    map.set('zero', 0)
        .set('one', 1)
        .set('two', 2)
        .set('three', 3)
        .set('four', 4)
        .set('five', 5)
        .set('six', 6)
        .set('seven', 7)
        .set('eight', 8)
        .set('nine', 9);

    for (let key of map.keys()) {
        let regexp = new RegExp(key, 'gi');
        s = s.replace(regexp, map.get(key));
    }
    return +s;
}

// 배열 이용, 해당 문자로 split 한 후 해당 인덱스로 join해서 합치기
// function solution(s) {
//     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     var answer = s;

//     for (let i = 0; i < numbers.length; i++) {
//         let arr = answer.split(numbers[i]);
//         answer = arr.join(i);
//     }

//     return Number(answer);
// }

console.log(solution("1zerotwozero3"));