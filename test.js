function solution(a, b, c) {
    // let answer;
    // const [min1, min2, max] = [a, b, c].sort((a, b) => a - b);
    // answer = min1 + min2 > max ? 'YES' : 'NO';
    let answer;
    let sum = a + b + c;
    let max = a;
    if (max < b) max = b;
    if (max < c) max = c;
    answer = sum - max > max ? 'YES' : 'NO';
    return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
