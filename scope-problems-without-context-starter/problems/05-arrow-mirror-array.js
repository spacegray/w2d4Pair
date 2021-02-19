/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:


***********************************************************************/

let arrowMirrorArray = array => {
  let ans = [...array];
  for(let i = array.length -1 ; i >= 0; i--){
    ans.push(array[i]);
  }
  return ans;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  return null;
}
