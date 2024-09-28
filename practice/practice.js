function solution(my_strings, parts) {
    var answer = '';
    let i = 0;
    let indexi = 0;
    while(i < my_strings.length){
        for(let k = parts[indexi][0]; k <= parts[indexi][1]; k++){
            answer += my_strings[i][k]
            console.log(my_strings[i][k])
        }
        indexi++;
        i++
    }
    return answer;
}

solution(["progressive", "hamburger", "hammer", "ahocorasick"], [[0, 4], [1, 2], [3, 5], [7, 7]])