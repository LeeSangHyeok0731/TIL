function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}