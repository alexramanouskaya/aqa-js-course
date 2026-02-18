function splitNumber(total, parts) {
  const points = [0, total]
  for (let i = 0; i < parts - 1; i++) {
    points.push(Math.floor(Math.random() * (total + 1)))
  }

  points.sort((a, b) => a - b)
  const result = [];

  for (let i = 0; i < points.length - 1; i++) {
    result.push(points[i + 1] - points[i]);
  }

  return result
}

console.log(splitNumber(22, 4))