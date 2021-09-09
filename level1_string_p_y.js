function solution(s) {
    var answer = true;
    const pArray = s.match(/p/gi);
    const yArray = s.match(/y/gi);
    if (!pArray && !yArray) return true;
    if ((pArray && !yArray) || (!pArray && yArray)) return false;
    answer = (pArray.length === yArray.length) ? true : false;
    return answer;
}

// 가지고 있는 개수가 동일하다는 건 그걸 뺀 나머지의 개수도 동일하다는 뜻
// function solution(s) {
//     var answer = true;
//     answer = s.toLowerCase().split('p').length === s.toLowerCase().split('y').length;
//     return answer;
// }