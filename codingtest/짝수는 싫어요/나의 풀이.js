function solution(n) {
    let i = 1;
    let count = 0;
    let answer = [];
    while(i <= n){
        answer[count] = i;
        i = i + 2;
        count = count + 1;
    }
    return answer;
}