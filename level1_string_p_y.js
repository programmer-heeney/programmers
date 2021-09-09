function solution(s) {
    var answer = true;
    const pArray = s.match(/p/gi);
    const yArray = s.match(/y/gi);
    if (!pArray && !yArray) return true;
    if ((pArray && !yArray) || (!pArray && yArray)) return false;
    answer = (pArray.length === yArray.length) ? true : false;
    return answer;
}