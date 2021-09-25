function solution(numbers, hand) {
    var answer = '';
    let position = {
        left: '*',
        right: '#'
    };
    let near = {
        '2': [[2], [1, 3, 5], [4, 6, 8], [0, 7, 9], ['*', '#']],
        '5': [[5], [2, 4, 6, 8], [0, 1, 3, 7, 9], ['*', '#']],
        '8': [[8], [0, 5, 7, 9], [2, 4, 6, '*', '#'], [1, 3]],
        '0': [[0], [8, '*', '#'], [5, 7, 9], [2, 4, 6], [1, 3]]
    }
    numbers.forEach(number => {
        let distanceLeft = 0;
        let distanceRight = 0;
        switch (number) {
            case 1:
            case 4:
            case 7:
                answer += 'L';
                position.left = number;
                break;
            case 3:
            case 6:
            case 9:
                answer += 'R';
                position.right = number;
                break;
            default:
                for (let i = 0; i < near[number].length; i++) {
                    if (near[number][i].includes(position.left) === true) {
                        distanceLeft = i;
                    }
                    if (near[number][i].includes(position.right) === true) {
                        distanceRight = i;
                    }
                }
                if (distanceLeft === distanceRight) {
                    switch (hand) {
                        case 'left':
                            answer += 'L';
                            position.left = number;
                            break;
                        case 'right':
                            answer += 'R';
                            position.right = number;
                            break;
                    }
                }
                else {
                    if (distanceLeft < distanceRight) {
                        answer += 'L';
                        position.left = number;
                    } else {
                        answer += 'R';
                        position.right = number;
                    }
                }
        }
        // console.log(number, position.left, position.right, distanceLeft, distanceRight)
    })
    return answer;
}

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"))