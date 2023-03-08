function solution(wallpaper) {
   wallpaper = wallpaper.map((item)=> item.split(''))
    
    let x_min = 0;
    let y_min = [];
    let x_max = 0;
    let y_max = [];
    
    for(let i=0; i<wallpaper.length; i++){
        if(wallpaper[i].includes('#')){
            x_min = i
            break;
        }
    }
    
    for(let i=0; i<wallpaper.length; i++){
        if(wallpaper[i].indexOf('#')>=0){
            y_min.push(wallpaper[i].indexOf('#'))
        }
    }
    y_min = Math.min(...y_min)
    
    
    for(let i=wallpaper.length-1; i>=0; i--){
        if(wallpaper[i].includes('#')){
            x_max = i+1
            break;
        }
    }
    
    for(let i=0; i<wallpaper.length; i++){
        wallpaper[i].reverse()
        if(wallpaper[i].indexOf('#')>=0){
            y_max.push(wallpaper[i].length-1 - wallpaper[i].indexOf('#')+1)
        }
    }
    // console.log(y_max)
    y_max = Math.max(...y_max)
    console.log(y_max)
    return [x_min, y_min, x_max, y_max]
}


// 0,1 -> 3,4 로 드래깅

