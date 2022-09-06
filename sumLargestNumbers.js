const sumLargestNumbers = function(array) {
  if(array.length >= 2) {
    let bigTwo = []
    let max1 = Math.max(...array);
    bigTwo.push(max1);
    let loc1 = array.indexOf(Math.max(...array));
    array.splice(loc1, 1);
    let max2 = Math.max(...array);
    bigTwo.push(max2);
    let loc2 = array.indexOf(Math.max(...array));
    array.splice(loc2, 1);
    return (bigTwo[0] + bigTwo[1]);
  } else {
    return "You need at least two numbers.";
  }  
};
console.log(sumLargestNumbers([1, 5, 78]));