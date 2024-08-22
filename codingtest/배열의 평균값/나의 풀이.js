function solution(numbers) {
    let i = 0;
    var answer = 0;
    let sum = 0;
    while(i < numbers.length){
        sum = sum + numbers[i];
        i++;
    }
    answer = sum / numbers.length;
    return answer;
}