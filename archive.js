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

//K8 Human Readable Time
//https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
// Write a function, which takes a non-negative integer (seconds) as input and 
//returns the time in a human-readable format (HH:MM:SS)
//HH = hours, padded to 2 digits, range: 00 - 99
//MM = minutes, padded to 2 digits, range: 00 - 59
//SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
//strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');
//dont for the 00 case
function humanReadable(seconds) {
  let hours = Math.trunc(seconds / 3600)
  let minutes = Math.trunc((seconds % 3600) / 60)
  let seconds2 = seconds % 3600 % 60
  const results = [hours, minutes, seconds2].map(item =>
    item < 10 ? (item = '0' + item.toString()) : (item = item.toString())
  )
  return `${results[0]}:${results[1]}:${results[2]}`;
}
console.log(humanReadable(3599));


//
//K9 valid braces
//https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
// Write a function that takes a string of braces, and determines if the order of the
//braces is valid. It should return true if the string is valid, and false if it's invalid.
// This Kata is similar to the Valid Parentheses Kata, but introduces new characters:
//brackets [], and curly braces {}. Thanks to @arnedag for the idea!
// All input strings will be nonempty, and will only consist of parentheses, brackets
//and curly braces: ()[]{}.
// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.
//"(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False
//https://regexlearn.com/learn/regex101
//https://regexlearn.com/cheatsheet
//
//const re = /\{\}/g
//return braces.match(re)
//return re.test(braces)
//return true;
//
function validBraces(braces) {
  console.log(matches);
  if (braces.length % 2 === 0) {
    let array = braces.split('');
    let continueTesting = true;
    while (continueTesting) {
      array2 = array.filter((item, index) => {
        if (item === '(' && array[index + 1] === ')' || item === '{' && array[index + 1] === '}' || item === '[' && array[index + 1] === ']') {
          array.splice(index + 1, 1)
          return false
        } else {
          return true
        }
      })
      array2.length === array.length ? continueTesting = false : array = array2
    }
    let result;
    array2.length === 0 ? result = true : result = false;
    return result;
  } else {
    return false;
  }
}
console.log(validBraces(')(([{}])()))('));
//console.log(validBraces('abcABC123 .:!?'));
//regex solution
function validBraces(braces){
  while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
  return !braces.length;
 }

 //
 //K11
//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
function pigIt(str){
  //return /^[a-z]+$/i.test(str)
  // let array = str.split(' ');
  // const results = array.map(item => {
  //   firstChar = item.charAt(0);
  //   /^[a-z]+$/i.test(item) ? item = item.replace(firstChar,'') + firstChar + 'ay' : item
  //   return item;
  // })
  //return results.join(' ')
  return str.split(' ').map(item => /^[a-z]+$/i.test(item) ? item.replace(item.charAt(0),'') + item.charAt(0) + 'ay' : item ).join(' ')
  //Code here
}
console.log(pigIt('Hello world !'));

//






