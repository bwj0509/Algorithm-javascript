function solution(n, lost, reserve) {
    let arr = Array(n).fill(true);
    lost.forEach((student)=>{
        arr[student-1] = false
    })
    lost.sort()
    reserve.sort()
    let count = 0;
    
    for(let i=0; i<n; i++){
        if(arr[i] === false){
            console.log(i+1,'번 있냐?')
            if(reserve.includes(i+1)){
                let index = reserve.indexOf(i+1)
                reserve.splice(index,1)
                arr[i] = true
            }
    }}
    
    
    for(let i=0; i<n;i++){
        if(arr[i] === false){
            
            if(reserve.includes(i)){
                let index = reserve.indexOf(i)
                reserve.splice(index,1)
                arr[i] = true
            }
            else if(reserve.includes(i+2)){
                let index = reserve.indexOf(i+2)
                reserve.splice(index,1)
                arr[i] = true
            }
        }
    }
    
    arr.forEach((student)=>{
        student && count ++
    })
    return count
}