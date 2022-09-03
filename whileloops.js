let x = 1;
while (x <= 20) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("JuliaJames");
  } else if (x % 5 === 0) {
    console.log("James");
  } else if (x % 3 === 0) {
    console.log("Julia");
  } else {
    console.log(x);
  }
  x = x + 1;
} 

let num = 5;
while (num >= 1) {
  if (num === 2) {
    console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!");
  } else if (num === 1) {
  console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
  } else {
    console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
  }
  num = num - 1;
}

let T = 60;
while (T >= 0) {
  if (T === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } else if (T === 6) {
    console.log("Main engine start.");
  } else if (T === 10) {
    console.log("Activate main engine hydrogen burnoff system.");
  } else if (T === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (T === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (T === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else {
    console.log("T- " + T + " seconds");
  }
  T = T - 1;
}