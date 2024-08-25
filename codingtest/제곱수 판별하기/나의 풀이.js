function solution(n) {
    var answer = 0;
    let left = 0;
    let right = n;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;
        
        if(square === n){
            answer = 1;
            return  answer;
        } else if( square < n){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    answer = 2;
    return answer;
}