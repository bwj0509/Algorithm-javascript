function solution(n) {
  let originalNum = n
  let count = 1
  
  
  while(1){
    let compareNum = originalNum + count
    let convertedOriginNum = originalNum.toString(2).split('0').join('')
    let convertedCompareNum = compareNum.toString(2).split('0').join('')
    if(convertedCompareNum === convertedOriginNum){
      return compareNum
    }
    else{
      count +=1
    }
    
  }

}