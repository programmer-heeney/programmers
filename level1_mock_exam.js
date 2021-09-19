function solution(answers) {
    var answer = [];
    let persons = [
        '12345',
        '21232425',
        '3311224455'
    ];

    for (let i = 0; i < persons.length; i++) {
        if (answers.length > persons[i].length) {
            persons[i] = persons[i].repeat(answers.length / persons[i].length);
            persons[i] += persons[i].slice(0, answers.length % persons[i].length);
        } else {
            persons[i] = persons[i].slice(0, answers.length);
        }
    };

    let arr = [];
    persons.forEach((num, i) => {
        arr.push({
            name: i + 1,
            correct: answers.reduce((acc, cur, j) => {
                if (cur == num[j]) acc++;
                return acc;
            }, 0)
        });
    })

    arr.sort((a, b) => {
        return a.correct !== b.correct ? b.correct - a.correct : a.name !== b.name ? a.name - b.name : -1;
    });

    answer = arr.filter(result => result.correct === arr[0].correct).map(obj => obj.name);
    return answer;
}

console.log(solution([1, 1, 1, 1])); // 3