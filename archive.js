//K1
const array1= [1,2,3,2,4,5]
const array2= [2]
let resultArray = array1;
for (const itemA2 of array2) {
  resultArray = resultArray.filter(itemA1 => {
    return itemA1 !== itemA2}
    )
}
console.log(resultArray)
//K1 clever
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
const c = array_diff(array1,array2)
console.log(c);

//K2 phone number
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
  // => returns "(123) 456-7890"
}
const c = createPhoneNumber(number);
console.log(c);

//K3 persistence
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
function persistence(num) {

  let numString = num.toString();
  let size = numString.length;
  let persistence = 0;

  if (size === 1) {
    return persistence
  } else if (size > 1) {
    let persistenceAchieved = false
    while (!persistenceAchieved) {
      let multiplication = parseFloat(numString.charAt(0))
      for (let index = 1; index < size; index++) {
        multiplication = multiplication * parseFloat(numString.charAt(index))
      }
      if (multiplication.toString().length < 2) {
        persistenceAchieved = true
      }
      persistence++;
      numString = multiplication.toString();
      size = numString.length;
    }
    return persistence
  }
}
console.log(persistence(139));
//better solution:
function persistence(num) {
  var times = 0;
  
  num = num.toString();
  
  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }
  
  return times;
}

//K4 bit counting
//Write a function that takes an integer as input, and returns the number 
//of bits that are equal to one in the binary representation of that number. 
//You can guarantee that input is non-negative.

//Example: The binary representation of 1234 is 10011010010, so the function 
//should return 5 in this case

var countBits = function(n) {
  //transform the number in bits
  return n.toString(2).split('').map(Number).reduce((a,b) => a + b);
};
console.log(countBits(1234));

//K5 Descending Order
// Your task is to make a function that can take any non-negative integer as an 
//argument and return it with its digits in descending order. Essentially,
// rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
// function descendingOrder(n){
//   return parseFloat(n.toString().split('').sort((a,b) => b-a).join(''));
// }
const descendingOrder = (n) => (parseFloat(n.toString().split('').sort((a,b) => b-a).join('')))
console.log(descendingOrder(42145));

//K6 isograms
//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
//  Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
function isIsogram(str){
  let array = str.toLowerCase().split('')
  const arrayLength = array.length;
  let result = true
  for (const item of array) {
    array2 = array.filter(a => a !== item)
    array2.length < arrayLength - 1 &&  (result = false)
  }
  return result;
}
console.log(isIsogram('Dermatoglyphics'));
//smart solution with set that takes unique value
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}

//K7 two to one
//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string
// , the longest possible, containing distinct letters - each taken only once - 
// coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
// function longest(s1, s2) {
//   //localeCompare compare to two string alphabetically with a return positive or negative
//   //this is then use in the sort function
//   const result = [...new Set(s1+s2)].sort((a,b) => a.localeCompare(b)).join('')
//   return result;
// }
// const longest = (s1, s2) => ([...new Set(s1+s2)].sort((a,b) => a.localeCompare(b)).join(''))
// console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));
//infact no need of localecompare...
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));


