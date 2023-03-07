function solution(today, terms, privacies) {
    
    let result = []
    today = today.split('.')
    today_y = Number(today[0])
    today_m = Number(today[1])
    today_d = Number(today[2])
    
    terms = terms.map((term)=> term.split(' '))
    let obj = {}
    terms.forEach((term)=>{
        obj[term[0]] = Number(term[1]*28)
    })
    
    privacies = privacies.map((privacie)=> privacie.split(' ')).map((privacie)=>[...privacie[0].split('.'),privacie[1]])
   
    privacies.forEach((privacies, index)=>{
        let year = today_y - Number(privacies[0])
        let month = today_m - Number(privacies[1])
        let day = today_d - Number(privacies[2])
        
        const difDay = (year* 336) + (month*28) + day
        
        console.log(difDay, obj[privacies[3]])
        if(difDay >= obj[privacies[3]]){
            result.push(index+1)
        }
    })
    
    
    return(result)
}
