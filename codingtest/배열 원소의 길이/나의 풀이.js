function solution(strlist) {
    var answer = [];
    let i = 0;
    while(i < strlist.length){
        answer[i] = strlist[i].length;
        i++;
    }
    return answer;
}