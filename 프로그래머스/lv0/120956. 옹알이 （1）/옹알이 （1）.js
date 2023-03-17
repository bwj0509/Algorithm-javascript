function solution(babbling) {
    let result = 0
    ableWords = ['aya', 'ye', 'woo', 'ma']
    
    babbling.forEach((bab)=>{
        let word = bab
        ableWords.forEach((ableWord)=>{
            word = word.replaceAll(ableWord, ' ')
        })
        
        if(word.trim().length === 0){
            result += 1
        }
    })
    return result
    
}