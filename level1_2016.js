function solution(a, b) {
    var answer = '';
    let days = new Map([
        [0, 'THU'],
        [1, 'FRI'],
        [2, 'SAT'],
        [3, 'SUN'],
        [4, 'MON'],
        [5, 'TUE'],
        [6, 'WED']
    ]);
    let months = {
        '1': 31, '2': 29, '3': 31, '4': 30, '5': 31,
        '6': 30, '7': 31, '8': 31, '9': 30, '10': 31,
        '11': 30, '12': 31
    }
    let totalDates = 0;
    for (let i = 1; i <= a; i++) {
        if (i > 1) {
            totalDates += months[i - 1];
        }
    }
    totalDates += b;
    answer = days.get(totalDates % 7);
    return answer;
}

console.log(solution(2, 1));