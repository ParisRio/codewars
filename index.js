//

// const test =(o) => {
//   //Sort the array from Highest to Lowest number then return its first item
//   const results = Object.keys(o).map(item => 'hello-'+item)
//   return results;
//   a.inde
// }
// var o = {
//   john: 12,
//   brian: true,
//   doe: 'hi',
//   fred: false
// };

// function closestToZero(numbers) {
//   // Your code goes here
//   const set = numbers.map(item => item < 0 ? item * -1 : item)
//   const result = [...new Set(set)].sort()
//   return result[0];
// }
function closestToZero(temp) {
  let result = temp.reduce((currentValue, previousValue) => {
    return Math.abs(currentValue) < Math.abs(previousValue) ? currentValue : previousValue;
  },temp[0])
  return result;
}
// let a = [1,2,3]
// // const b = [4,5,6]
// // a = a.concat(b)
// const result = a.indexOf(1)
// const results2 = result % 2 === 0 ? true : false;
// console.log(results2);
console.log(closestToZero([-3, -2, -8, 1, 4, 5]));