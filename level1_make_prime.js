function solution(nums) {
    var answer = 0;
    let sums = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[k] === undefined) break;
                sums.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    sums.forEach(sum => {
        let isPrime = true;
        for (let i = 2; i * i <= sum; i++) {
            if (sum % i === 0) isPrime = false;
        }
        isPrime && answer++;
    })
    return answer;
}

console.log(solution([1, 2, 7, 6, 4])) // 4