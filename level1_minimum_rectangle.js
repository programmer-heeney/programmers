function solution(sizes) {
    var answer = 0;
    let firstMax = 0;
    let minArr = [];
    sizes.forEach(size => {
        let temp = Math.max(...size);
        minArr.push(Math.min(...size));
        firstMax = Math.max(temp, firstMax);
    });

    let secondMax = Math.max(...minArr);
    answer = firstMax * secondMax;
    return answer;
}

// 변수명 수정
// function solution(sizes) {
//     let w = 0;
//     let h = 0;
//     let hMins = [];
//     sizes.forEach(size => {
//         w = Math.max(w, ...size);
//         hMins.push(Math.min(...size));
//     });

//     h = Math.max(...hMins);
//     return w * h;
// }