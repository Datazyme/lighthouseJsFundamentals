//returns different capitalizations through input string
//returns string with no spaces all but the first letter of first word capitalized
const makeCase = function (input, type) {
  let ans = "";
  switch (type) {
    case "camel":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          ans += input[i + 1].toUpperCase();
          i++;
        } else {
          ans += input[i];
        }
      }
      break;
    //returns string with no spaces all first letters of all words capitalized
    case "pascal":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          ans += input[i + 1].toUpperCase();
          i++;
        } else if (i === 0) {
          ans += input[0].toUpperCase();
        } else {
          ans += input[i];
        }
      }
      break;
    //returns string with no first letter capitalized and dashes on bottom where spaces are
    case "snake":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          ans += "_";
        } else {
          ans += input[i];
        }
      }
      break;
    // returns string with no capitalization and middle dashes where the spaces were
    case "kebab":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          ans += "-";
        } else {
          ans += input[i];
        }
      }
      break;
    //returns a string with first letter capitalized of each word
    case "title":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          ans += " " + input[i + 1].toUpperCase();
          i++;
        } else if (i === 0) {
          ans += input[0].toUpperCase();
        } else {
          ans += input[i];
        }
      }
      break;
    //returns string with vowels capitalized
    case "vowel":
      for (let i = 0; i < input.length; i++) {
        if (
          input[i] === "a" ||
          input[i] === "e" ||
          input[i] === "i" ||
          input[i] === "o" ||
          input[i] === "u"
        ) {
          ans += input[i].toUpperCase();
        } else if (i === 0) {
          ans += input[0].toUpperCase();
        } else {
          ans += input[i];
        }
      }
      break;
    //returns string with only consonants capitalized
    case "consonant":
      for (let i = 0; i < input.length; i++) {
        if (
          input[i] !== "a" &&
          input[i] !== "e" &&
          input[i] !== "i" &&
          input[i] !== "o" &&
          input[i] !== "u"
        ) {
          ans += input[i].toUpperCase();
        } else {
          ans += input[i];
        }
      }
      break;
    case "upper":
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          ans += "_";
        } else {
          ans += input[i].toUpperCase();
        }
      }
      break;
    case []:
      return Array.isArray(type);
  }
  return ans;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));

/* 
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING */
