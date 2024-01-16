//hashtag
//Hastag generator
//https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!
Here's the deal: It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false. 
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false|| result.length > 140
*/
// function generateHashtag (str) {
//     let result =  ['#', ...str.split(' ').map(item => item.charAt(0).toUpperCase()+item.slice(1))].join('')
//     result.length < 2 && (result = false) || result.length > 140 && (result = false);
//     return result
// }
function generateHashtag (str) {
    let result =  ['#', ...str.split(' ').map(item => item.charAt(0).toUpperCase()+item.slice(1))].join('')
    return str === '' || result.length > 140 ? false : result
}
console.log(generateHashtag ('Hello there thanks for trying my Kata'));

//
//Greed Dice
/* Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it,
 is to score a throw according to these rules.
 You will always be given an array with five six-sided dice values.
 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a 
triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
Example scoring
Throw       Score
---------   ------------------
5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5) */
// it( "should value this mixed set correctly", function() {
//     Test.expect( score( [2, 4, 4, 5, 4] ) == 450, "Should be 450" );
//   });
//https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
function score( dice ) {
    let score = 0;
    let stack = {
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
    }
    for (const item of dice) {
        stack[item]++;
    }
    for (const [key, value] of Object.entries(stack)) {
        key === '1' && value === 1 && (score = score + 100);
        key === '1' && value === 2 && (score = score + 200);
        key === '1' && value === 3 && (score = score + 1000);
        key === '1' && value === 4 && (score = score + 1100);
        key === '1' && value === 5 && (score = score + 1200);
        key === '5' && value === 1 && (score = score + 50);
        key === '5' && value === 2 && (score = score + 100);
        key === '5' && value === 3 && (score = score + 500);
        key === '5' && value === 4 && (score = score + 550);
        key === '5' && value === 5 && (score = score + 600);
        ['2','3','4','6'].includes(key) && value > 2 && (score = score + parseFloat(key)*100);
      }
    return score
  }
console.log(score([3, 3, 3, 3, 3]));
//
//regex password
//https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript
/* You need to write regex that will validate a password to make sure it meets the following criteria:
At least six characters long
contains a lowercase letter (?=.*[a-z])
contains an uppercase letter (?=.*[A-Z])
contains a number (?=.*\d) (positive look ahead for any character . and all the following * \d digits)
Valid passwords will only be alphanumeric characters. ^[A-Za-z0-9]+$ (^$ start to end +all items here {6,} for at least 6 charac)
Test.expect(validate('Password123'), 'Password123 - Expected true');*/
function validate(password) {
  return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)^[A-Za-z0-9]{6,}$/.test(password);
}
console.log(validate('djI38D55'));

//
//ROT13 cypher
//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
/* 
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers 
or special characters included in the string, they should be returned as they are. Only letters from the 
latin/english alphabet should be shifted, like in the original Rot13 "implementation".
it("Test", 
function(){
  Test.expect("Grfg" == rot13("Test"), "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test"))    
}) 
*/
function rot13(message){
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = message.split('').map(item => {
    if(/[a-zA-Z]/.test(item)){
      let cyphered = alphabet[(alphabet.indexOf(item.toLowerCase())+13) % 26];
      /[A-Z]/.test(item) && (cyphered = cyphered.toUpperCase());
      return cyphered
    }
    return item
  })
  return result.join('');
}
console.log(rot13('Test test !'));
//best result:
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
//
//gap in prime
//https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4/train/javascript
/* The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2.
From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43
A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes
 (see: http://mathworld.wolfram.com/PrimeGaps.html).
We will write a function gap with parameters:
g (integer >= 2) which indicates the gap we are looking for
m (integer > 2) which gives the start of the search (m inclusive)
n (integer >= m) which gives the end of the search (n inclusive)
n won't go beyond 1100000.
In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.
So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, 
n if these numbers exist otherwise `nil or null or None or Nothing (or ... depending on the language).
Examples:
- gap(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}
gap(2, 5, 5) --> nil. In C++ {0, 0}. In F# [||]. In Kotlin, Dart and Prolog return []`
gap(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}
([193, 197] is also such a 4-gap primes between 130 and 200 but it's not the first pair)
gap(6,100,110) --> nil or {0, 0} or ... : between 100 and 110 we have 101, 103, 107, 109 but 101-107 
is not a 6-gap because there is 103 in between and 103-109is not a 6-gap because there is 107in between.
You can see more examples of return in Sample Tests.
Note for Go
For Go: nil slice is expected when there are no gap between m and n. Example: gap(11,30000,100000) --> nil
Ref
https://en.wikipedia.org/wiki/Prime_gap
assert.deepEqual(gap(8,300,400), [359, 367]); */
//gap in prime
//https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4/train/javascript
/* The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2.
From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43
A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes
 (see: http://mathworld.wolfram.com/PrimeGaps.html).
We will write a function gap with parameters:
g (integer >= 2) which indicates the gap we are looking for
m (integer > 2) which gives the start of the search (m inclusive)
n (integer >= m) which gives the end of the search (n inclusive)
n won't go beyond 1100000.
In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.
So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, 
n if these numbers exist otherwise `nil or null or None or Nothing (or ... depending on the language).
Examples:
- gap(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}
gap(2, 5, 5) --> nil. In C++ {0, 0}. In F# [||]. In Kotlin, Dart and Prolog return []`
gap(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}
([193, 197] is also such a 4-gap primes between 130 and 200 but it's not the first pair)
gap(6,100,110) --> nil or {0, 0} or ... : between 100 and 110 we have 101, 103, 107, 109 but 101-107 
is not a 6-gap because there is 103 in between and 103-109is not a 6-gap because there is 107in between.
You can see more examples of return in Sample Tests.
Note for Go
For Go: nil slice is expected when there are no gap between m and n. Example: gap(11,30000,100000) --> nil
Ref
https://en.wikipedia.org/wiki/Prime_gap
assert.deepEqual(gap(8,300,400), [359, 367]); */
// function gap(g, m, n) {
//   let numberArray = []
//   for (let index = 2; index <= n; index++){
//     numberArray = [...numberArray,index];  
//   }
//   numberArray = numberArray.filter( item => {
//     let isPrime = true;
//     for (let index2 = 2; index2 < item; index2++) {
//       item % index2 === 0 && (isPrime = false)
//     }
//     return isPrime && item >= m;
//   })
//   console.log(numberArray);
//   let result = null;
//   let continueWhileLoop = true;
//   let index = 0;
//   while (continueWhileLoop) {
//     numberArray[index+1] - numberArray[index] === g && (result = [numberArray[index],numberArray[index+1]]) && (continueWhileLoop = false)
//     index < numberArray.length ? index++ :  (continueWhileLoop = false)
//   }
//   return result;
// }
// console.log(gap(8,300,400));



let eratosthenes = function(m,n) {
  // Eratosthenes algorithm to find all primes under n
  var array = [], upperLimit = Math.sqrt(n), output = [];

  // Make an array from 2 to (n - 1)
  for (var i = 0; i < n; i++) {
      array.push(true);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (var i = 2; i <= upperLimit; i++) {
      if (array[i]) {
          for (var j = i * i; j < n; j += i) {
              array[j] = false;
          }
      }
  }

  // All array[i] set to true are primes
  for (var i = 2; i < n; i++) {
      if(array[i] && i >= m) {
          output.push(i);
      }
  }

  return output;
};
function gap(g, m, n) {
  let numberArray = eratosthenes(m,n);
  console.log(numberArray);
  let result = null;
  let continueWhileLoop = true;
  let index = 0;
  while (continueWhileLoop) {
    numberArray[index+1] - numberArray[index] === g && (result = [numberArray[index],numberArray[index+1]]) && (continueWhileLoop = false)
    index < numberArray.length ? index++ :  (continueWhileLoop = false)
  }
  return result;
}
console.log(gap(4, 130, 200));

//kata
//Snail Sort
//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
//Snail Sort
//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
/* Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:
array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9] 
Test.assertDeepEquals(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
Test.assertDeepEquals(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
});
*/
snail = function (array) {
  let sorted = []
  while (array.length > 1) {
    h = array.length;
    w = array[1].length;
    sorted = [...sorted, ...array[0]]
    for (let index = 1; index < h - 1; index++) {
      sorted = [...sorted, array[index][w - 1]]
    }
    sorted = [...sorted, ...array[h - 1].reverse()]
    for (let index = h - 2; index > 0; index--) {
      sorted = [...sorted, array[index][0]]
    }
    array.pop()
    array.shift()
    for (const item of array) {
      item.pop()
      item.shift()
    }
  }
  array.length === 1 && sorted.push(...array[0])
  console.log(array);
  return sorted;
}
//console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
//console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
//
//trailing 0
//https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript
/* Write a program that will calculate the number of trailing zeros in a factorial of a given number.
N! = 1 * 2 * 3 * ... * N
Be careful 1000! has 2568 digits...
For more info, see: http://mathworld.wolfram.com/Factorial.html
Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros. 
Test.assertEquals(zeros(30), 7, "Testing with n = 30")
1! = 1
2! = 2*1 = 2
3! = 3*2*1 = 6
4! = 4*3*2*1 = 24
5! = 5*4*3*2*1 = 120
6! = 6*5*4*3*2*1 = 720
=> assumption add a 0 every 5.
//99 => 22
/1000 => 249
/904154534 => 226038626
//https://www.geeksforgeeks.org/count-trailing-zeroes-factorial-number/
*/
function zeros (n) {
  let count = 0;
  for (let index = 5; Math.trunc(n/index) >= 1; index*=5) {
    count += Math.trunc(n/index)
  }
  return count;
}
console.log(zeros(904154534));
//
//Maximum subarray sum
//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
/* The maximum sum subarray problem consists in finding the maximum sum of a 
contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of 
the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray. 
Test.assertEquals(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)
*/
var maxSequence = function(arr){
  let sum = 0;
  for (let index = 1; index <= arr.length; index++) {
    for (let index2 = 0; index2 <= arr.length-index; index2++) {
      let window = arr.slice(index2,index2+index);
      let sumTemp = window.reduce((previousValue, currentValue) => previousValue+currentValue,0)
      sumTemp > sum && (sum = sumTemp)
    }
  }
  return sum;
}
console.log(maxSequence([]));

//binary tree
//https://www.codewars.com/kata/52bef5e3588c56132c0003bc

//
//Integers: Recreation One
//https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript
/* 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get
: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

Task
Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of 
their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The 
subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of 
which is a square and then the sum of the squared divisors.

Example:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
The form of the examples may change according to the language, see "Sample Tests". 
Test.assertSimilar(listSquared(250, 500), [[287, 84100]])
 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get
: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.
*/
function listSquared(m, n) {
  let results = [];
  for (let index = m; index <= n; index++){
      let divisors = [];
      for (let index2 = 1; index2 <= index; index2++) {
          index % index2 === 0 && divisors.push(index2*index2);
      }
      let sum = divisors.reduce((previousValue, currentValue) => previousValue+currentValue,0)
      Number.isInteger(Math.sqrt(sum)) && results.push([index,sum])
  }
  return results;
}
console.log(listSquared(42, 250));
//https://www.codewars.com/kata/55aa075506463dac6600010d/solutions/javascript

////
//https://www.codewars.com/kata/52bef5e3588c56132c0003bc/train/javascript
/* You are given a binary tree:
class Node { 
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left  = left;
    this.right = right;
  }
}
Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, 
then root children (from left to right) are second and third, and so on.
Return empty array if root is null.
Example 1 - following tree:

                 2
            8        9
          1  3     4   5
Should return following list:
[2,8,9,1,3,4,5]
Example 2 - following tree:

                 1
            8        4
              3        5
                         7
Should return following list:
[1,8,4,3,5,7] */
    //console.log(rootNode.right.right.value);
    //acces level 2 directly
    //console.log(Object.keys(rootNode));
    //Object.keys(rootNode).forEach(key => console.log(rootNode[key])  )
    //Object.values(rootNode).forEach(val => console.log(val));
    // for (const [key, value] of Object.entries(rootNode)) {
    //     //console.log(`${key}: ${value}`);
    //     console.log(value);
    // }
    // for (const key in rootNode) {
    //     if (rootNode.hasOwnProperty(key)) {
    //         console.log(rootNode[key]);
    //     }
    // }
    
class Node {
  constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
  }
}
const treeOne =
  new Node(2,
      new Node(8,
          new Node(1),
          new Node(3)
      ),
      new Node(9,
          new Node(4),
          new Node(5)
      )
  );
const treeTwo =
  new Node(1,
      new Node(8,
          null,
          new Node(3)
      ),
      new Node(4,
          null,
          new Node(5,
              null,
              new Node(7)
          )
      )
  );
function treeByLevels(rootNode) {
  let result = [];
  let stack = []
  stack.push(rootNode)
  let continueNavigation = true;
  while (continueNavigation && rootNode !== null) {
       let tempStack = [];
       for (const item of stack) {
           const {value, left, right} = item;
           value !== null && result.push(value)
           left !== null && tempStack.push(left)
           right !== null && tempStack.push(right)
       }
      stack = tempStack;
      stack.length === 0 && (continueNavigation = false);
   }
  return result;
}
console.log(treeByLevels(treeTwo));

//
//https://www.codewars.com/kata/53e57dada0cb0400ba000688/train/javascript