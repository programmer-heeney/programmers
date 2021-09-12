function grade(score) {
    if (score >= 90) return 'A';
    else if (score >= 80 && score < 90) return 'B';
    else if (score >= 70 && score < 80) return 'C';
    else if (score >= 50 && score < 70) return 'D';
    else return 'F';
}

function solution(scores) {
    var answer = '';
    let getScores = [[]];
    scores.forEach((score) => {
        score.forEach((num, i) => {
            if (!getScores[i]) getScores[i] = [];
            getScores[i].push(num);
        });
    });
    getScores.forEach((scores, i) => {
        let otherScore = [...scores];
        let myScore = otherScore.splice(i, 1);
        let max = Math.max(...otherScore);
        let min = Math.min(...otherScore);
        let avr = myScore > max || myScore < min ?
            otherScore.reduce((acc, cur) => acc + cur) / otherScore.length :
            scores.reduce((acc, cur) => acc + cur) / scores.length;
        answer += grade(avr);
    })
    return answer;
}

// if문 없이 grade 부여하는 방법
// return 'FFFFFDDCBAA'[avr / 10]