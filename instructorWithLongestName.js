const instructorWithLongestName = function(instructors) {
  let moreLetter = instructors[0];
  for(let i = 0; i < instructors.length; i++) {
    if(instructors[i].name.length > moreLetter.name.length) {
      moreLetter = instructors[i];
    }
  }
  return moreLetter;
};
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

/* To do that, you would want to use instructor[“name”] inside of a 
for loop that iterates through each object in the array, as opposed to counting up the variable i.*/