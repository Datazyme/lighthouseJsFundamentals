const urlEncode = function(text) {
  let text2 = "";
  for (let i = 0; i < text.length; i++) {
    
    if(text[i] === " " && i !== 0 && i !== text.length - 1) {
      
      var temp = text[i];
      temp = "%20";
      text2 += temp;
      
    } else {
      text2 += text[i];
    }
    
  }
  return text2;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));