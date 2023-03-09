function solution(babbling) {
    let able = ['aya', 'ye', 'woo', 'ma']
    let result = 0
    for(let i=0; i<babbling.length; i++){
        for(let j=0; j<able.length; j++){
            let index;
            while(babbling[i].includes(able[j])){
                if(index +1 !== babbling[i].indexOf(able[j]) ){
                    index = babbling[i].indexOf(able[j])
                babbling[i] =  babbling[i].replace(able[j],"0")
                }
                else{
                    break;
                }
                
            }
            // if(babbling[i].includes(able[j])){
            //     babbling[i] =  babbling[i].replace(able[j],"0")
            // }
        }
    }
    
    babbling.forEach((item)=>{
        if(Number(item) === 0){
            result +=1
        }
    })
    
    
    return result
    
}