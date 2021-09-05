function solution(arr1, arr2) {
    var answer = [[]];
    arr1.map((arr, i) => {
        for (let j = 0; j < arr1[i].length; j++) {
            if (answer[i] === undefined) {
                answer.push([]);
            }
            answer[i].push(arr[j] + arr2[i][j]);
        }
    })
    return answer;
}