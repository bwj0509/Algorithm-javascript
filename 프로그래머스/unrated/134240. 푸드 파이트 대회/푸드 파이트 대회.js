function solution(food) {
  arr = [0];
  for (let i = food.length - 1; i > 0; i--) {
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      arr.push(i);
      arr.unshift(i);
    }
  }
  return arr.join("");
}