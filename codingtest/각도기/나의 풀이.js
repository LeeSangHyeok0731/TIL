function solution(angle) {
    if(angle < 90)
        var answer = 1;
    else if(angle == 180)
        var answer = 4;
    else if(angle == 90)
        var answer = 2;
    else if(angle > 90)
        var answer = 3;
    
    return answer;
}