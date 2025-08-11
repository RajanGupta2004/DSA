// How do you remove the last element from an array?
// const lastElement1 = arr.pop(); // O(1)
// console.log(arr, lastElement1);

// How do you add an element to the end of an array?
// arr.push(5); // O(1)
// console.log(arr);

// How do you add an element to the start of an array?
// arr.unshift(0); // O(N)
// console.log(arr);

// How do you remove the first element from an array?
// arr.shift(); // O(N)
// console.log(arr);

// Question 1: How do you check if an element exists in an array?

function FindElementInArr(arr, target) {
  for (let x of arr) {
    if (target === x) {
      return true;
    }
  }
  return false;
}

// console.log(FindElementInArr([1, 2, 3, 5], 3));

// Question 2: How do you find the index of an element in an array?

function FindElementInArrIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// console.log(FindElementInArrIndex([1, 2, 3, 5], 33));

// How to delete, add & update elements from a specific index?

const arr = [1, 3, 2, 4, 5, 6, 7, 7, 0];

// console.log(arr);

arr.splice(1, 3); // it modify the original array and used for add update and delete
// console.log(arr);

// Question 3: How can you check if two arrays are equal?

function ArryEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// console.log(ArryEqual([1, 2, 3], [1, 2, 3]));

// Question 4: How to sort an array in ascending and descending order?

const arr1 = [1, 3, 2, 4, 5, -6, 7, 7, 0];

// console.log(arr1.sort());

// console.log(arr1.sort((a, b) => b - a));

// Flat: [1, 2, 4, 5, 6, 7, 8, 9]

const y = [1, 2, [4, 5, [6, 7]], 8, 9];
const flattedArray = y.flat(2);
// const flattedArray = y.flat(1);
// console.log(flattedArray);
