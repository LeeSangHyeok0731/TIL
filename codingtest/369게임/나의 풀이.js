function solution(order) {
    var answer = 0;
    let i = 0;
    let StringOrder = String(order);
    while(i < StringOrder.length){
        if(StringOrder[i] === "3" ||
           StringOrder[i] === "6" ||
           StringOrder[i] === "9"){
            answer++;
        }
        i++;
    }
    return answer;
  }