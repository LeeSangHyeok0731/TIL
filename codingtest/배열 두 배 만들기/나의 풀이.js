function solution(numbers) {
    var answer = [];
    let i = 0;
    while(i < numbers.length){
        numbers[i] = numbers[i] * 2;        
        i++;
    }
    return numbers;
}