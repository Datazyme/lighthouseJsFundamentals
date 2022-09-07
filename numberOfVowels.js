const numberOfVowels = function(data) {
  let vowels = /[aeiou]/gi;
  let result = data.match(vowels);
  let count = result.length;
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
