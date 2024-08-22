function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}