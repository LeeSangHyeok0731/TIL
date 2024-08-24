function solution(num_list) {
    let i = 0;
    let even = 0;
    let odd = 0;
    while(i < num_list.length){
        if(num_list[i] % 2 == 0){
            even++;
        } else if(num_list[i] % 2 == 1) {
            odd++;
        }
        i++;
    }
    var answer = [even, odd];
    return answer;
}