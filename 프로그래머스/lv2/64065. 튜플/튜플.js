function solution(s) {
    s = s.replace('{{','').replace('}}','').split('},{').map((item)=>(item.split(','))).sort((a,b)=> {
        if(a.length - b.length >0){
            return 1
        }
        else{
            return -1
        }
    })
    
    let result = []
    
    s.forEach((item)=>{
        for(let i=0; i<item.length;i++){
            if(result.includes(Number(item[i])) === false){
                result.push(Number(item[i]))
            }
        }
    })
    
    return(result)
    
              
}