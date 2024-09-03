function solution(my_string, letter) {
    var answer = '';
    let i = 0;
    while(i < my_string.length){
        if(my_string[i] == letter){
            i++;
            continue;
        } else {
            answer += my_string[i]
            i++
        }
    }
    return answer;
}