function solution(s) {
    let arr = [...s]
    arr[0] = arr[0].toUpperCase()
    for(let i=0; i<arr.length-1;i++){
        if(arr[i] === ' '){
            arr[i+1] = arr[i+1].toUpperCase();
        }else{
            arr[i+1] = arr[i+1].toLowerCase();
        }
    }
    return arr.join('')

}