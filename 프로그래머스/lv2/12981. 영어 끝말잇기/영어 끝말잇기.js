function solution(n, words) {
    let result = []
    for(let i=0; i<words.length; i++){
        let words_copy = [...words]
        words_copy.splice(i,1)
        
//         console.log(i)
//         console.log(words_copy)
//         console.log(words[i])
        if(words[i].length ===1){
            let index = i%n+1
            let num = Math.ceil((i+1)/n)
            return [index,num]
        }
        if(i!==0){
            if(words[i-1][words[i-1].length-1] !== words[i][0]){
            let index = i%n+1
            let num = Math.ceil((i+1)/n)
            return [index,num]
        }
        
        else if(words_copy.includes(words[i]) && i> words.indexOf(words[i])){
            console.log(i, '에 대해서 진행하자!')
            let index = i%n+1
            let num = Math.ceil((i+1)/n)
            return [index,num]
        }
        }
        
    }
    return [0,0]
}