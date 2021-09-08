// 에라토스테네스의 체
function solution(n) {
    var answer = 0;
    let arr = Array(n + 1).fill(1);
    arr[0] = 0;
    arr[1] = 0;
    for (let i = 2; i <= n; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = 0;
            }
        }
    }
    arr.filter(value => value && answer++);
    return answer;
}

// 시간초과
// function isPrime(x) {
//     for (let j = 2; j < Math.floor(Math.sqrt(x)) + 1; j++) {
//         if (x % j === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function solution(n) {
//     var answer = 0;
//     let arr = Array(n + 1).fill(1);
//     arr[0] = 0;
//     arr[1] = 0;
//     for (let i = 2; i * i <= n; i++) {
//         console.log(i, arr);
//         if (!arr[i]) continue;
//         if (isPrime(i)) {
//             arr = arr.map((value, idx) => {
//                 if (idx < 2) return 0;
//                 if (idx === i) return 1;
//                 else {
//                     if (value) return idx % i ? 1 : 0;
//                     return value;
//                 }
//             });
//             console.log('소수: ', i, arr);
//         }
//     }
//     arr.filter(value => value && answer++);

//     return answer;
// }

// console.log(solution(10));

// 시간초과
// function isPrime(x) {
//     for (let j = 2; j < Math.floor(Math.sqrt(x)) + 1; j++) {
//         if (x % j === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function solution(n) {
//     var answer = 0;
//     for (let i = 2; i <= n; i++) {
//         isPrime(i) && answer++;
//     }
//     return answer;
// }

// 시간복잡도 O(n^2) : 시간초과
// function solution(n) {
//     var answer = 0;
//     let isPrime = false;
//     for (let i = 2; i <= n; i++) {
//         if (i === 2) answer++;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//             isPrime = true;
//         }
//         isPrime && answer++;
//     }
//     return answer;
// }