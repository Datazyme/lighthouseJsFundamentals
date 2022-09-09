const checkAir = function (samples, threshold) {
  let dirty = [];
  let clean = [];
  
  for (let i = 0; i <= samples.length; i++) { 
    if (samples[i] === "dirty") {
      dirty.push(samples[i]);
      
    } else if (samples[i] === "clean") {
      clean.push(samples[i]);      
    }        
  }
  let sum = dirty.length + clean.length;
  let percent = sum * threshold;
  if (dirty.length <= percent) {
    return "Clean";
  } else {
    return "Polluted";
  }      
};




console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))