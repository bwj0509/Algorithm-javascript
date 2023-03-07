function solution(s, skip, index) {
    skip = skip.split('').map((s)=> s.charCodeAt())
    console.log(skip)
    
    s= s.split('').map((s)=> s.charCodeAt())
    
    for(let i=0; i<s.length; i++){
        for(let j=0; j<index; j++){
            s[i] += 1
            
            while(skip.includes(s[i])){
                s[i]+=1
            }
            
            if(s[i]>122){
                s[i] -= 26
            }
            while(skip.includes(s[i])){
                s[i]+=1
            }
            
            
        }
    }
    return(String.fromCharCode(...s))
    
}