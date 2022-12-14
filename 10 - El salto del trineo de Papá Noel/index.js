/*
  Gaussian bell peak is the max value and the values of both sides must go decreasing
*/
function checkJump(heights) {
   const equals = (arr1, arr2) => 
    arr1.every((h, index) => h === arr2[index]);
  
  const indexOfMaxValue = heights.indexOf(Math.max(...heights));

  const left = heights.slice(0, indexOfMaxValue);
  const right = heights.slice(indexOfMaxValue + 1);

  return left.length > 0
    && right.length > 0
    && equals(left, [...left].sort())
    && equals(right, [...right].sort((a, b) => b - a));
}


console.log("expected:", true, "Actual:", checkJump([1, 3, 8, 5, 2]));// true
console.log("expected:", false, "Actual:", checkJump([1, 7, 3, 5]));// true

