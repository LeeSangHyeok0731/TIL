function solution(num_list) {
    var answer = [];
    let i = num_list.length - 1;
    let j = 0;
    while(i >= 0){
        answer[j] = num_list[i];
        j++;
        i--;
    }
    return answer;
}