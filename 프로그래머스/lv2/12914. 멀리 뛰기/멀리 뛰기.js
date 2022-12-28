function solution(n) {
    let fiboArr = [1, 2]
    for (let i = 2; i < 2000; i++) {
        fiboArr[i] = (fiboArr[i - 1] + fiboArr[i - 2]) % 1234567
    }
    return (fiboArr[n - 1])
}
