function solution(n) {
    let fiboArr = [0, 1]
    for (let i = 2; i < 100001; i++) {
        fiboArr[i] = (fiboArr[i - 1] + fiboArr[i - 2]) % 1234567
    }
    return (fiboArr[n])
}