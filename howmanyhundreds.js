const howManyHundreds = function (num) {
  let x = num % 100;
  let y = num - x;
  return y / 100
}


console.log(howManyHundreds(894))
