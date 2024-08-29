function solution(numbers, num1, num2) {
    var answer = [];
    let i = 0;
    let numberCount = 0;
    while(i < numbers.length){
        if(i >= num1 && i <= num2){
            answer[numberCount] = numbers[i];
            numberCount++;
        }
        i++;
    }
    return answer;
}