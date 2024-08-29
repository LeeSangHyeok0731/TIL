function solution(numbers, num1, num2) {
    return numbers.splice(num1, num2-num1+1);
}