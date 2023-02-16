function solution(numbers) {
    let ans = numbers.map((number)=> number+'').sort((a,b)=>Number((b+a))-Number((a+b))).join('')
    return Number(ans)==0?'0':ans
}