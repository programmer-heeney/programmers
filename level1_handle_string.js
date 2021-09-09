function solution(s) {
    var answer = true;
    if (s.length !== 4 && s.length !== 6) return false;
    const regex = new RegExp('[^0-9]', 'g');
    answer = regex.test(s) ? false : true;
    return answer;
}