function solution(cacheSize, cities) {
 
    let time = 0;
    let cacheArr = []
    
    cities = cities.map((city)=> city.toLowerCase())
    
    if(cacheSize === 0){
       let times = 5
       let len = cities.length
        return times*len
        }
    
    cities.forEach((city)=>{
        if(cacheArr.includes(city)){ // 캐시에 있는 경우
            let index = cacheArr.indexOf(city)
            let temp = cacheArr.splice(index, 1)
            cacheArr.push(...temp)
            time += 1
        }
        else{ // 캐시에 없는 경우
            if(cacheSize > cacheArr.length){ // 캐시가 아직은 비어있을때
                cacheArr.push(city)
                time += 5
            }
            else{ // 캐시가 꽉 찼을 때
                cacheArr.shift()
                cacheArr.push(city)
                time += 5
            }
        }
    })
    return time
}
    
    
    
    