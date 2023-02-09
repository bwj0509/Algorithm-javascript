function solution(n) {
  threeXarr = [];

  for (let i = 0; i < 200; i++) {
    if (i % 3 !== 0 && !i.toString().includes("3")) {
      threeXarr.push(i);
    }
  }
  return threeXarr[n - 1];
}