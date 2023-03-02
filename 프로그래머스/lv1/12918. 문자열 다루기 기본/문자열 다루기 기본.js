function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  if (isNaN(s)) {
    return false;
  }

  if(s.split('').includes('e')){
      return false
  }
    
    
  return true;
}