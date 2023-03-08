function solution(id_list, report, k) {
    let people = {
        reported:{},
        report:{},
        result:{}
    }
    id_list.forEach((person)=>{
        people.reported[person] = 0
        people.report[person] = []
        people.result[person] = 0
    })
    
    report = report.map((repor)=> repor.split(' '))
    report.forEach((repor)=> {
        if(!people.report[repor[0]].includes(repor[1])){
            people.reported[repor[1]] +=1
            people.report[repor[0]].push(repor[1])
        }
        
    })
    let reportConfirmed =Object.keys(people.reported).filter((key)=> people.reported[key] >=k )

    
    reportConfirmed.forEach((person)=> {
        for(let key in people.report){
            if(people.report[key].includes(person)){
                people.result[key] +=1
            }
    }
    })
    
    
    let resultArr = []
    
    for(let key in people.result){
        resultArr.push(people.result[key])
    }
    
    return(resultArr)
}