const repeatNumbers = function(data) {
  let newArray = [];  
  for (let y = 0; y < data.length; y ++) {
    let repTime = data[y][1];
    let toRep = data[y][0];
    let convert = toRep.toString();
    let answer = convert.repeat(repTime);
    newArray.push(answer);        
  };
  let newerArray = newArray.toString();
  return newerArray;  
};



console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));