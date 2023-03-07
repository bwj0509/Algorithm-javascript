function solution(s) {
    let arr = s.split(' ')
    let ans = ''
    
    for(let i=0; i<arr.length;i++){
        for(let j=0; j<arr[i].length;j++){
            if(j %2 ===0){
                ans += arr[i][j].toUpperCase()
                console.log(arr[i][j].toUpperCase())
            }
            else {
                ans += arr[i][j].toLowerCase()
            }
        }
        if( i <arr.length-1){
            
        ans += ' '
        }
    }
    
    return ans
}