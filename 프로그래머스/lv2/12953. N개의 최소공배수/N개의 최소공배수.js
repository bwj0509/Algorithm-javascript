function solution(arr) {
    let multiGCD = 1
    
    for(let i=0; i<arr.length; i++){
        multiGCD = (multiGCD * arr[i]) /(getGCD(multiGCD, arr[i]))
    }
    return multiGCD
}

const getGCD = (a, b)=>{
    let gcd = 1
    for(let i=1; i<Math.max(a,b)+1; i++ ){
        if(a % i === 0 && b % i === 0){
            gcd = i
        }
    }
    return gcd
}