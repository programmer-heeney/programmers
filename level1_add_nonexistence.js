function solution(numbers) {
    var answer = -1;

    answer = numbers.reduce((sum, number) => {
        return sum -= number;
    }, 9 * 10 / 2);

    return answer;
}