function solution(n) {
    var answer = 0;
    if(1 >  n / 7){
        answer = 1;
        return answer;
    }
    answer = n / 7;
    return Math.ceil(answer);
}