function solution(lottos, win_nums) {
    let countZero = 0;
    let hasNum = 0;
    const set = new Set(win_nums);
    const ranks = new Map([
        [6, 1],
        [5, 2],
        [4, 3],
        [3, 4],
        [2, 5],
        [1, 6],
        [0, 6]
    ])

    lottos.forEach((num) => {
        if (num === 0) countZero++;
        if (set.has(num)) hasNum++;
    })

    return [ranks.get(hasNum + countZero), ranks.get(hasNum)];
}