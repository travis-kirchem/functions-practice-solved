// FUNCTIONS: Early return
// BEFORE YOU START: please read the /exercises-info/e3.md file.

/**
 * ====================================================
 * Create a function that works as follows:
 * The function name is 'doesArrayIncludeItemsBetweenVals'
 * given an array of numbers. You can use it as the arr for testing purposes
 * The function take an arr (array), val1 (number) and val2 (number) as arguments.
 * The function returns a boolean if array includes an item that is greater than val1 and less than val2
 * The function MUST have 2 return statements: make an early return if the item is found and use the default return otherwise
 * The function MUST be written with NAMED function syntax.
 * doesArrayIncludeItemsBetweenVals([2, 4, 2], 3, 5) => true
 * doesArrayIncludeItemsBetweenVals([2, 4, 2], 5, 10) => false
 */

// Your code goes here...
function doesArrayIncludeItemsBetweenVals(arr, val1, val2) {
if (!arr.length) return false;
for (let elem of arr) {
    if (elem > val1 && elem < val2) {
      // this early return will prevent the function from executing the rest of the code
      // if it has met the first truthy condition value.
      return true;
    }
  }
  // this is the default return statement for this function which happen in any case
  // not covered by early returns.
  return false;
}
doesArrayIncludeItemsBetweenVals([1,2,3], 4, 5);



/**
 * ====================================================
 * Please read the /exercises-info/e4.md file. It describes different types of syntax to write functions
 * Create three functions using 3 types of syntax: named, arrow and function expression (with anonymous function)
 * Named function: getValueWithConditionOne;
 * Arrow Function name: getValueWithConditionTwo;
 * Variable name for the function expression: getValueWithConditionThree;
 * All three functions resolve the same task:
    * The function takes two numbers as arguments
    * If the numbers are both equal to 40, return the sum of them
    * Else return the doubled sum of them
 * getValueWithConditionOne(40, 40) => 80;
 * getValueWithConditionOne(20, 30) => 100;
 */

// Your code goes here...

// Named Function
function getValueWithConditionOne(x, y) {
  if (x == 40 && y == 40) {
    return x + y;
  } else {
    return (x + y)*2;
  }
}
// Arrow Function
const getValueWithConditionTwo = (x, y) => {
  if (x == 40 && y == 40) {
    return x + y;
  } else {
    return (x + y)*2;
  }
}
// Variable name for the function expression
const getValueWithConditionThree = function (x, y) {
  if (x == 40 && y == 40) {
    return x + y;
  } else {
    return (x + y)*2;
  }
}

getValueWithConditionOne();
getValueWithConditionTwo();
getValueWithConditionThree();

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


// Do not delete or change the lines beneath
const f = {
  doesArrayIncludeItemsBetweenVals: doesArrayIncludeItemsBetweenVals || undefined,
  getValueWithConditionOne: getValueWithConditionOne || undefined,
  getValueWithConditionTwo: getValueWithConditionTwo || undefined,
  getValueWithConditionThree: getValueWithConditionThree || undefined,
}
export { f };
