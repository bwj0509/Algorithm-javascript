function solution(fees, records) {
    let basic_time = fees[0]
    let basic_price = fees[1]
    let in_time = fees[2]
    let in_price = fees[3]
    
    records = records.map((record)=> record.split(' '))
    let recordss = {}
    let time = {}
    
    records.forEach((record)=>{
        if(recordss[record[1]]){
            recordss[record[1]].push(record[0])
        }
        else{
            recordss[record[1]] = [record[0]]
        }
    })
    
    for(key in recordss){
        if(recordss[key].length % 2 !== 0){
            recordss[key].push('23:59')
        }
        let timehab = 0
        
        for(let i=0; i<recordss[key].length; i+=2){
            let startHour = Number(recordss[key][i].slice(0,2))
            let startMinute = Number(recordss[key][i].slice(3,5))
            let endHour = Number(recordss[key][i+1].slice(0,2))
            let endMinute = Number(recordss[key][i+1].slice(3,5))
            let resultTime = ((endHour - startHour)*60) + (endMinute - startMinute)
            timehab += resultTime
        }
        time[key] = [timehab]
    }
    
    const timeArrs = Object.entries(time);
    timeArrs.sort((a,b)=> Number(a[0]) - Number(b[0]))
    
    let result = []
    
    
    timeArrs.forEach((timeArr)=>{
        let price = 0;
        let time = timeArr[1]
        if(time <= basic_time ){
                price += basic_price
            }
            else{
                price = price + basic_price + (Math.ceil((time -basic_time )/in_time))*in_price
            }
        result.push(price)
    })
    
    

    return result
    
}