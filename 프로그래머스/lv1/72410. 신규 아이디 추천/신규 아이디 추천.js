function solution(new_id) {
    let arr = new_id.split('')
    
    // 1단계
    arr = arr.map((s)=>{
        return s.toLowerCase()
    })
    new_id = arr.join('')
    
    // 2단계
    new_id = new_id.replace(/[^\w\-\.]/g, "");
    

    // 3단계
    new_id = new_id.replace(/\.{2,}/g, ".");
    
    arr = new_id.split('')
    
    
    // 4단계
    if(arr[0] === '.'){
        arr.shift()
    }
    if(arr[arr.length-1] ==='.'){
        arr.pop()
    }
    
    // 5단계
    if(arr.length ===0){
        arr.push('a')
    }
    
    
    // 6단계
   if(arr.length >= 16){
       arr = arr.slice(0,15)
   } 
   if(arr[arr.length-1] === '.'){
       arr.pop()
   }
    
    
   // 7단계
 while(arr.length === 1 || arr.length ===2){
     arr.push(arr[arr.length-1])
 }
    return(arr.join(''))
}