function solution(num_list) {
    return [
      num_list.filter((num) => num % 2 === 0).length,
      num_list.filter((num) => num % 2 === 1).length,
    ];
  }