function solution(n, t) {
    var answer = 0;
    let i = 0;
    while(i < t){
        n = n * 2;
        i++;
    }
    answer = n;
    return answer;
}