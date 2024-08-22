function solution(price) {
    var discount = 0;
    if (price >= 500000) {
        discount = 0.2;
    } else if (price >= 300000) {
        discount = 0.1;
    } else if (price >= 100000) {
        discount = 0.05;
    }

    var answer = price * (1 - discount);
    return Math.floor(answer);
}