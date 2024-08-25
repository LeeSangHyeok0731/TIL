function solution(i, j, k) {
  var answer = 0;
  let index = i;
  let array = "";
  let minNum = i;
  while(index <= j){
      array += String(minNum);
      index++;
      minNum++;
  }
  let a = 0;
  while(a < array.length){
    if(array[a] == k){
      answer++;
    }
    a++;
  }
  return answer;
}