function solution(n, numlist) {
    var answer = [];
    let i = 0;
    let count = 0;
    while(i < numlist.length){
        if(numlist[i] % n === 0){
            answer[count] = numlist[i];
            count++;
        }
        i++;
    }
    return answer;
}