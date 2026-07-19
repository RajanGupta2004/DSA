//   Question 1
const printNumber = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};

// printNumber(5);

// -----------------------

//   Question 2

const printNumber2 = (num) => {
  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
};
// printNumber2(5);
// ----------------------------------

//  Question 3

const printEvenNumber = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};

// printEvenNumber(10);

//-----------------------------------------

//  Question 4

const sumAllNaturalNumber = (num) => {
  // first method
  //   const result = (num * (num + 1)) / 2;
  //   console.log(result);

  // second method
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  console.log(sum);
};

// sumAllNaturalNumber(5);

// -------------------------------

// Question 5

const factorialOfNumber = (num) => {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result = result * i;
  }
  console.log(result);
};

// factorialOfNumber(5);

// Question 6

const sumOfAllEvenNumber = (num) => {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
};

// sumOfAllEvenNumber(10);

// ----------------------

// Question 7

const printTheSquareOfNumber = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i * i);
  }
};

// printTheSquareOfNumber(5);

// ---------------------------------

// Home work

const printNumberDivisibleBy3and5 = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i);
    }
  }
  return -1;
};

// printNumberDivisibleBy3and5(30);

//----------------------------------

const sumOfOddNumber = (num) => {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      sum = sum + i;
    }
  }
  return sum;
};

// console.log(sumOfOddNumber(10));
// -----------------------------------------

const printCubeOfNumber = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i * i * i);
  }
};

// printCubeOfNumber(5);

const printEvenAndPerfectSquare = (num) => {
  for (let i = 1; i <= num; i++) {
    // if (Math.sqrt(i) && i % 2 == 0) {
    //   console.log(i);
    // }
    console.log("test", Math.sqrt(i));
    if (Number.isInteger(Math.sqrt(i)) && i % 2 == 0) {
      console.log(i);
    }
  }
};

printEvenAndPerfectSquare(20);
