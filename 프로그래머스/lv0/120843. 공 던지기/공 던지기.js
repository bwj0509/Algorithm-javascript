function solution(numbers, k) {
  let arrLength = numbers.length;
  let move = (k - 1) * 2;
  let index = move % arrLength;

  return numbers[index];
}
