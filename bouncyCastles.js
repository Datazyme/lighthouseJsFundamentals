// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  let sphereVol = (4 / 3) * PI * radius ** 3;
  return sphereVol;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let coneVol = PI * radius ** 2 * (height / 3);
  return coneVol;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let prismVol = width * height * depth;
  return prismVol;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let total = 0
  for (const solid of solids) {
    if (solid.type === "sphere") {
      total += sphereVolume (solid.radius);
    } else if (solid.type === "cone") {
      total += coneVolume (solid.radius, solid.height);
    }
  }
  return total;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);