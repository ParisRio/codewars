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