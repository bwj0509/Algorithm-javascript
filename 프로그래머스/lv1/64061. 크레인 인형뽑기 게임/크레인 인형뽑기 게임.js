function solution(board, moves) {
    let newBoard = Array(board.length).fill().map(()=>[])
    let basket = []
    let removeCount = 0;
    board.reverse()
    
    for(let i=0; i<board.length;i++){
        for(let j=0; j<board.length; j++){
            if(board[i][j] !== 0){
                newBoard[j].push(board[i][j])
            }
            
        }
    }    
    console.log(newBoard)
    for(let i=0; i<moves.length; i++){
        if(newBoard[moves[i]-1].length !=0){
            let pick = newBoard[moves[i]-1].pop()
            basket.push(pick)
            if(basket.length>1){
                if(basket[basket.length-1] === basket[basket.length-2]){
                    basket.pop()
                    basket.pop()
                    removeCount += 2
                }
            }
        }
    }
    return(removeCount)
}

//[1,5,3,5,1,2,1,4]