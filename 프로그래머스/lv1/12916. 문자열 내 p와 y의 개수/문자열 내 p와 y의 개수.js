function solution(s) {
  let sArr = s.split("");
  let pCount = 0;
  let yCount = 0;
  sArr.forEach((item) => {
    if (item.toLowerCase() === "p") {
      pCount += 1;
    } else if (item.toLowerCase() === "y") {
      yCount += 1;
    }
  });

  return pCount === yCount;
}