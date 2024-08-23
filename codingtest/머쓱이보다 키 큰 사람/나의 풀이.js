function solution(array, height) {
    let i = 0;
    let count = 0;
    while(i< array[i]){
        if(array[i] > height){
            count++;
        }
        i++;
    }
    let answer = count;
    return answer;
}