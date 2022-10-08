const calculateChange = function(total, cash) {
  // calculate total change
  var changeTotal = cash - total;
  // create the object to deliver answer in denominations
  var changeExact = {}; 
  // make denominations into array. These are keys
  const coinTypes = ["twentyDollar", "tenDollar", "fiveDollar", "twoDollar", "oneDollar", "quarter", "dime", "nickel", "penny"]
  // create array of coin values to correspond to array of coin types. These are the values for the keys
  const coinValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1]
  // create a variable that will tally the amount of each denomination to return like 2 quarters, 4 pennies etcå
  var amount;
  // create for loop to loop through coinValues and determine how many of each denomination to return.
  for (let i = 0; i < coinValues.length; i++) {
    //Math.floor rounds down. The code divides the total change by each index of the array of values.
    amount = Math.floor(changeTotal / coinValues[i]);
    if (amount > 0) {
      //This is how you add values to an empty object! 
      //The empty object is changeExact, each index of coinTypes is the key in square brackets and the variable amount is the value.
      //This follows the form of {key:value}
      changeExact[coinTypes[i]] = amount;
      // Do this in lieu of subtracting. By getting the remainder to put through the caluculation again. 
      changeTotal = changeTotal % coinValues[i];
      }
    }
return changeExact;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/* Expected output
{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 } */
