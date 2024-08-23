function solution(array, height) {
    var answer = array.filter(item => item > height);
    return answer.length;
}
solution([1,2,3,4],2)