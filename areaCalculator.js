function caluclateRectangleArea(length, width) {
  if (length > 0 && width > 0) {
    return length * width;
  }
  return undefined;  
}
console.log(caluclateRectangleArea(6, 4));

function calculateTriangleArea(base, height) {
  let result = base * height / 2;
  if (base < 0 || height < 0) {
    return "undefined";
  } else {
    return result;
  }
}
console.log(calculateTriangleArea(-1, 0));

function calculateCircleArea(radius) {
  let result = Math.PI * radius ** 2; 
  if (radius < 0) {
    return "undefined";
  } else {
    return result;
  }  
}
console.log(calculateCircleArea(5, 4));