function solution(cipher, code) {
    var answer = '';
    let i = 0;
    let j = 1;
    while(i < cipher.length){
        if(i == (code * j) - 1){
            answer += cipher[i];
            j++;
        }
        i++;
    }
    return answer;
}