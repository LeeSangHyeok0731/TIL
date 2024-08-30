function solution(my_string, n) {
    var answer = '';
    let i = 0;
    let j = 0;
    while(i < my_string.length){
        while(j < n){
            answer += my_string[i];
            j++;
        }
        i++;
        j = 0;
    }
    return answer;
}