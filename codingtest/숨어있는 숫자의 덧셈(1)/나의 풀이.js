function solution(my_string) {
    var answer = "";
    let numberList = [];
    let number = 0;
    let i = 0;
    while(i < my_string.length){
        if(my_string[i] >= '0' && my_string[i] <= '9'){
            numberList[number] = +my_string[i];
            number++;
        }
        i++;
    }
    i = 0;
    let sum = 0;
    while(i < numberList.length){
        sum += numberList[i];
        i++;
    }
    answer = sum;
    return answer;
}