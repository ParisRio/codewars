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