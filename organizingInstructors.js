const organizeInstructors = function(instructors) {
  //create a new object
  let program = {};
  for (let i of instructors) {
    //Note the use of bracket notation to access property names that are defined by strings
    //! checks if a key is undefined in the object
    if (!(program[i.course])) {
      //in which case it defines the key (course) and assigns an empty array as its value.
      program[i.course] = [];
    }
    //add (i.name) as value to [i.course] key
    program[i.course].push(i.name)
  }
  return program
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));





/*{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}*/