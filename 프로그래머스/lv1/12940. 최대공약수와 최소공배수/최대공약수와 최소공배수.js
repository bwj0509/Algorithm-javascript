function solution(n, m) {
    
  
  return([getGcd(n, m), getLcm(n,m)])
}


const getGcd = (n, m)=>{
    let gcd = 1;
    for(let i=2; i<=Math.min(n, m); i++){
       if(n % i === 0 && m % i ===0){
          gcd = i 
       } 
    }
    return gcd
}

const getLcm = (n, m)=>{
    let lcm = 1;
    while(1){
        if(lcm % n === 0 && lcm % m ===0){
            break;
        }
        lcm++
    }
    
    return lcm
}