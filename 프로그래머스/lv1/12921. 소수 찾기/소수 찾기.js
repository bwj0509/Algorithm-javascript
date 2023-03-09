function solution(n) {
    const primeList =[]
    const isPrime = Array(n+1).fill(true)
    
    isPrime[0] = false
    isPrime[1] = false
    console.log(isPrime)
    for(let i=2; i<=n; i++){
        if(isPrime[i]){
            primeList.push(i);
            for(let j=i; j<=n; j+=i){
                isPrime[j] = false
            }
        }
    }
 return(primeList.length)   
}