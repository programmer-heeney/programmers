// 배열을 이용해서 할당
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const input = data.split(" ").map(Number);
    const [N, M] = input;

    const stars = Array(N).fill('*').join('');
    for (let i = 0; i < M; i++) {
        console.log(stars);
    }
});

// repeat 함수 사용
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);

//     const stars = '*'.repeat(a);
//     for(let i = 0; i < b; i++) {
//         console.log(stars);
//     }
// });

// 이중 for문 사용
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);

//     const stars = '*'.repeat(a);
//     for(let i = 0; i < b; i++) {
//         console.log(stars);
//     }
// });

