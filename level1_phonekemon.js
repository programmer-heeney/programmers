function solution(nums) {
    var answer = 0;
    let map = nums.reduce((map, num) => {
        if (!map.get(num)) map.set(num, 0);
        map.set(num, map.get(num) + 1);
        return map;
    }, new Map);

    answer = map.size >= nums.length / 2 ? nums.length / 2 : map.size;
    return answer;
}

console.log(solution([3, 3, 3, 2, 2, 4]));

// 중복을 제거한 값들의 개수만 알면 되니까
// const arr = [...new Set(nums)];