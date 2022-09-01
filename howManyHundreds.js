function howManyHundreds(bottles) {
  let x = bottles;
  let y = bottles % 100;
  let z = x - y;
  return z / 100;
}
console.log(howManyHundreds (99));