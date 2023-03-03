function solution(k, m, score) {
    let boxNum = parseInt(score.length / m)
    let money = 0;
    score.sort().reverse()
    for(i=1; i<=boxNum;i++){
         money += score[i*m -1] * m
    }
    return money
}