function solution(s) {
    let sLen = s.length /2
    if(s.length % 2 ===0){
        return s[sLen-1]+ s[sLen]
    }
    else{
        return s[Math.floor(sLen)]
    }
}