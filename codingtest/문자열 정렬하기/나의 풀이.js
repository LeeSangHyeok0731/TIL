function solution(my_string) {
    var answer = [];
    let Number = [];
    let i = 0;
    let Num = 0;
    while(i < my_string.length){
        if(my_string[i] >= '0' && my_string[i] <= '9'){
            Number[Num] = +my_string[i]
            Num++;
        }
        i++;
    }
    for (let i = 0; i < Number.length - 1; i++) {
      for (let j = 0; j < Number.length - 1 - i; j++) {
        if (Number[j] > Number[j + 1]) {
          let temp = Number[j];
          Number[j] = Number[j + 1];
          Number[j + 1] = temp;
        }
      }
    }
    answer = Number;
    return answer;
}