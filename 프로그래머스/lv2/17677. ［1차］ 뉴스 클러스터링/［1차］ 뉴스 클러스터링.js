function solution(str1, str2) {
    
    const pattern = /[^a-zA-Z]/; // 정규 표현식 패턴
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    
    let str1Arr = []
    let str2Arr = []
    
    let gyo = []
    let hab = []
    
    for(let i=0; i<str1.length-1; i+=1){
       str1Arr.push(str1.slice(i,i+2))
    }
    for(let i=0; i<str2.length-1; i+=1){
       str2Arr.push(str2.slice(i,i+2))
    }
    str1Arr = str1Arr.filter((s)=> !pattern.test(s) && s.length === 2)
    str2Arr = str2Arr.filter((s)=> !pattern.test(s) && s.length === 2)
    
    console.log(str1Arr)
    console.log(str2Arr)
    
    let str1Arr_temp = [...str1Arr]
    let str2Arr_temp = [...str2Arr]
    
    str1Arr_temp.forEach((s)=>{
        if(str2Arr_temp.includes(s)){
            let index = str2Arr_temp.indexOf(s)
            let temp = str2Arr_temp.splice(index,1)
            gyo.push(...temp)
        }
    })
    
    let gyoLen = gyo.length
    let habLen = [...str1Arr,...str2Arr ].length - gyoLen
    
    console.log(parseInt((0/6) * 65536))
    
    
    if(gyoLen === 0 && habLen !== 0){
        return 0
    }
    else if(gyoLen === 0 && habLen ===0){
        return 65536
    }
    else{
        return parseInt((gyoLen/habLen) * 65536)
    }
    
    
}