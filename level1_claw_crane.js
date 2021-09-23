function solution(board, moves) {
    var answer = 0;
    let stack = [];
    moves.forEach(move => {
        let idx = move - 1;
        for (let i = 0; i < board.length; i++) {
            if (board[i][idx]) {
                stack.push(board[i][idx]);
                board[i][idx] = 0;

                if (stack[stack.length - 1] === stack[stack.length - 2]) {
                    stack.pop();
                    stack.pop();
                    answer += 2;
                }
                break;
            }
        }
    })
    return answer;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]))