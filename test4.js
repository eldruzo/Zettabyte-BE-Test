/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  numbers = numbers.sort();
  let missingNumber = null;

  for(let i = 0; i < numbers.length; i++) {
    if((numbers[i] - i) > 0) {
      missingNumber = i;
      break;
    }
  }

  return missingNumber;
}

console.log(result(numbers));
