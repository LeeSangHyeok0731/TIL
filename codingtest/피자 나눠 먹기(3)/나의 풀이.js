function solution(slice, n) {
    var answer = 0;
    answer = n / slice;
    if(answer.isInteger){
        return answer;
    }
    return Math.ceil(answer);
}