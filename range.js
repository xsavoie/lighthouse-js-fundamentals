function range(start, end, step) {
  const output = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return [];
  }
  for (let i = start; i <= end; i = i + step){
    output.push(i);
  }
  return output;
}

console.log(range(-5, 2, 3));