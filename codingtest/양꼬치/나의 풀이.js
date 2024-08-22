function solution(n, k) {
    let answer = 0;
    answer += n*12000;
    k = k - Math.floor(n/10);
    if(k == 0){
        return answer;
    }
    answer = answer + k*2000;
    return answer;
}