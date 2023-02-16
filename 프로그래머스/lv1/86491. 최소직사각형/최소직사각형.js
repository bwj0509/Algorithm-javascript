function solution(sizes) {
    let w = [];
    let h = [];
    
    let newArr = sizes.map((item)=> item.sort((a,b)=>(a-b))).forEach((item)=>{
        w.push(item[0])
        h.push(item[1])
    })
    
    let ans = Math.max(...w)*Math.max(...h)
    return ans
}
