function solution(weights, head2head) {
    var answer = [];
    let players = [];
    const player = {
        num: 0,
        weight: 0,
        winRate: 0,
        winHeavier: 0
    };
    weights.forEach((weight, i) => {
        player.num = i + 1;
        player.weight = weight;
        players.push({ ...player });
    })
    head2head.forEach((results, i) => {
        if (results.match(/W/gi)) {
            players[i].winRate = results.match(/W/gi).length / results.replace(/N/gi, '').length;
        };
        for (let j = 0; j < results.length; j++) {
            if (results[j] === 'N' || results[j] === 'L') continue;
            let other = players.find(player => player.num === j + 1);
            players[i].weight < other.weight && players[i].winHeavier++;
        }
    })
    answer = players.sort((a, b) => b.winRate - a.winRate ||
        b.winHeavier - a.winHeavier ||
        b.weight - a.weight ||
        a.num - b.num).map(player => player.num);

    return answer;
}