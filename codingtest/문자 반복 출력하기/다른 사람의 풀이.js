function solution(my_string, n) {
    return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '')
}