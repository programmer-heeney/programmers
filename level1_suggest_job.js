function solution(table, languages, preference) {
    var answer = '';
    let sums = table.map(value => {
        let obj = {};
        let split = value.split(' ');
        obj.job = split[0];
        obj.sum = 0;
        languages.forEach((language, i) => {
            let weight = 6 - split.findIndex((value) => value === language);
            weight = weight > 5 ? 0 : weight;
            let score = preference[i] * weight;
            obj.sum += score;
        });
        return obj;
    });
    sums.sort((a, b) => b.sum - a.sum !== 0 ? b.sum - a.sum : a.job < b.job ? -1 : 1);
    answer = sums[0].job;
    return answer;
}

console.log(solution(["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"], ["PYTHON", "C++", "SQL"], [7, 5, 5]))