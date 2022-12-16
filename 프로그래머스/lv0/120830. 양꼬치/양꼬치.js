function solution(n, k) {
    let mainPrice = n * 12000;
    let sodaPrice = k * 2000;
    let servicePrice = Math.floor(n/10) * 2000

    let answer = mainPrice + sodaPrice - servicePrice
    return answer
}