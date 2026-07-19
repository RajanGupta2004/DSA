// Linear Search

// 1️⃣ Find an Element in an Array Using Linear Searc

function linearScearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return `Element found At ${i}`;
    }
  }

  return "Not found";
}

const result = linearScearch([2, 3, 4, 3, 3, 22, 3], 4);

console.log("result", result);

// 2️⃣ Find the First Occurrence of an Element

function firtOccurence(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return `Found At ${i}`;
    }
  }

  return -1;
}

console.log("First Occurrence", firtOccurence([2, 3, 2, 4, 4], 4));

// 3️⃣ Find the Last Occurrence of an Element

function lastOccurence(arr, ele) {
  for (i = arr.length; i > 0; i--) {
    if (arr[i] === ele) {
      return `Last Occurence ele at ${i}`;
    }
  }

  return -1;
}

console.log("Last Occurrence", lastOccurence([2, 3, 2, 4, 4], 2));

// 4️⃣ Count How Many Times an Element Appears

function countTheElement(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  return { count };
}

console.log("countTheElement", countTheElement([2, 3, 2, 4, 4], 4));

// 5️⃣ Find All Indexes Where the Element Appears

function findIndexsofElement(arr, ele) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      newArr.push(i);
    }
  }

  return newArr;
}

console.log("findIndexsofElement()", findIndexsofElement([2, 3, 2, 4, 4], 4));

// 6️⃣ Linear Search in Array of Objects

function linearScearchObject(arr, searchId) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === searchId) {
      return arr[i];
    }
  }

  return null;
}

console.log(
  linearScearchObject(
    [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
      { id: 3, name: "C" },
    ],
    3,
  ),
);
