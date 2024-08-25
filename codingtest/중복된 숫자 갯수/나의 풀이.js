function solution(array, n) {
    var answer = 0;
    let i = 0;
    while(i < array.length){
        if(array[i] === n){
            answer++;
        }
        i++;
    }
    return answer;
}