function solution(num, total) {
  gajungchi = 0;
  for (i = 2; i <= num; i++) {
    gajungchi += i - 1;
  }
  console.log(gajungchi);
  startNumber = (total - gajungchi) / num;
  console.log(startNumber);
  let result = [];
  for (i = 0; i < num; i++) {
    result.push(startNumber + i);
  }
  return result;
}