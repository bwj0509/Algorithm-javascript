function solution(n) {
  threeXarr = [];
  let count = 0;
  
  for (let i = 1; count < n; i++) {
    if (i % 3 !== 0 && !i.toString().includes("3")) {
      threeXarr.push(i);
      count++;
    }
  }
  return threeXarr[n - 1];
}