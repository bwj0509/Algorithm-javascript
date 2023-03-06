function solution(cards1, cards2, goal) {
    
//     goal.forEach((word)=>{
//         console.log(word)
//         console.log(cards1, cards2)
//         if(cards1[0] == word){
//             cards1.shift()
//         }
//         else if(cards2[0] == word){
//             cards2.shift()
//         }
//         else{
//             return "No"
//         }
        
//     })
    
    
    for(let i=0; i<goal.length;i++){
        if(cards1[0] == goal[i]){
            cards1.shift()
        }
        else if(cards2[0] == goal[i]){
            cards2.shift()
        }
        else{
            return "No"
        }
    }
    return "Yes"
    
    
    
    console.log(goal)
}