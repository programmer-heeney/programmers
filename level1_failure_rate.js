function solution(N, stages) {
    var answer = [];
    let users = stages.length;
    let failure = new Array(N).fill(0);
    stages.forEach(stage => {
        if (failure[stage - 1] !== undefined) failure[stage - 1]++;
    });
    let failureRate = failure.reduce((arr, value, i) => {
        arr.push({ stage: i + 1, rate: value / users });
        users -= value;
        return arr;
    }, []);
    answer = failureRate.sort((a, b) => a.rate !== b.rate ? b.rate - a.rate : a.stage - b.stage).map(obj => obj.stage);

    return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])) // [3,4,2,1,5]