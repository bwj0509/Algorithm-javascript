function solution(array, commands) {
    let result = []
    let sortedArr = []
    commands.forEach((item, index)=>{
        let tempArr = array.slice(item[0]-1,item[1])
        sortedArr[index] = tempArr
    })
    sortedArr.map((item)=>(
        item.sort(function(a,b){
            return a-b
        })
    ))
    commands.forEach((item, index)=>{
        result[index] = sortedArr[index][item[2]-1]
    })
    return result
}