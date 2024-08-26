function solution(friends, gifts) {
  var answer = 0;
  let list = [];
  let friendsList = [];
  let friendsx = friends.length;
  let friendsy = friends.length;
  let appx = 0;
  let appy = 0;
  while(app < friendsx){
    friends[appx]
  }
  let i = 0;
  let j = 0;
  let listx = 0;
  while(i < friends.length){
    let listy = 0;
    let count = 0;
    j = 0;

    while (j < gifts.length) {//준거
      let index = gifts[j].split(" ");
      if (friends[i] === index[0]) {
        count++;
        let num = 0;
        while(num < friends.length){
          if(friends[num] === index[1]){
            if (!friends[i]) {
              friends[i] = [];
            }
            friendsList[i][num] = 1;
          } else {
            if (!friends[i]) {
              friends[i] = [];
            }
            friendsList[i][num] = 1;
          }
          num++;
        }
      }
      j++;
    }
    console.log(friendsList)
    if (!list[listx]) {
      list[listx] = [];
    }
    list[listx][listy] = count;

    j = 0;
    count = 0;
    while (j < gifts.length) {//받은거 
      let index = gifts[j].split(" ");
      if (friends[i] === index[1]) {
        count++;
      }
      j++;
    }
    list[listx][++listy] = count;
    listx++;
    i++;
  }
  i = 0;
  j = 0;
  let array = [];
  while(i < friends.length){
    array[i] = list[i][0] - list[i][1];
    i++;
  }

  answer = list;
  console.log(answer);
  return answer;
}

solution(
  ["joy", "brad", "alessandro", "conan", "david"], 
  ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]
);