function solution(my_string) {
    var answer = '';
    let i = 0;
    console.log(my_string.length)
    while(i < my_string.length){
        if(my_string[i] == 'a' || 
            my_string[i] == 'e' || 
            my_string[i] == 'i' ||
            my_string[i] == 'o' || 
            my_string[i] == 'u'){
        } else {
            answer += my_string[i];   
        }
        i++;
    }
    return answer;
}