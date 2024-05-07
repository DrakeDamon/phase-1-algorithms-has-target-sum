function hasTargetSum(array, target) {
  for (let i = 0; i <array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}



/* 
O(n2)
*/

/* 
FUNCTION hasTargetSum(nummbers, target);
FOR each index i from 0 i+1 to length of numbers;
IF numbers[i] + numbers[j] EQUALS target:
RETURN true
RETURN false*/

/* TEST CASES
Multiple Pairs Summing to Target:
Input: [1, 2, 3, 4, 5], Target: 6
Expected Output: true (because 1+5 and 2+4 both add up to 6)
No Pairs Summing to Target:
Input: [1, 2, 3, 4, 5], Target: 10
Expected Output: false (no two numbers add up to 10)
Edge Case - Empty Array:
Input: [], Target: 5
Expected Output: false (no elements to add up)
Edge Case - Single Element:
Input: [5], Target: 5
Expected Output: false (a single element cannot form a pair)
/*
it should take in an array function and a target integer so if any 2 numbers add together to the target number then the function will return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
