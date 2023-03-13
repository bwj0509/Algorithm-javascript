function solution(clothes) {
    let closet ={}
    
    clothes.map((clothe)=>{
        const [name, kind] = clothe
        if(closet.hasOwnProperty(kind)){
            closet[kind]++
        }
        else{
            closet[kind] = 1
        }
        
    })
    
    let ans = 1
    for(const key in closet){
        ans *= closet[key] +1
    }
    return(ans-1)
    
 
}