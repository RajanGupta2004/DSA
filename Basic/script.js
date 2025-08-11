// Question 1: Sum of all natural numbers from 1 to n

function SumOnNaturalNumber(n) {
  //   let sum = 0;
  //   for (let i = 1; i <= n; i++) {
  //     sum = sum + i;
  //   }
  //   return sum;

  return (n * (n + 1)) / 2;
}

// console.log(SumOnNaturalNumber(3));
// console.log(SumOnNaturalNumber(10));
// console.log(SumOnNaturalNumber(21));

// Question 2: Sum of digits of a number

function SumOfDigit(num) {
  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }

  return sum;
}

// console.log(SumOfDigit(123));

// Question 3: Count the number of digits of a number

function CountNoOfDigit(num) {
  num = Math.abs(num);
  //   if (num == 0) return 1;
  //   let count = 0;

  //   while (num > 0) {
  //     count++;
  //     num = Math.floor(num / 10);
  //   }

  //   return count;

  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

// console.log(CountNoOfDigit(0));
// console.log(CountNoOfDigit(127899));

// Question 4: Check if a number is palindrome

// function isPalidrome(num) {
//   return num == num.split("").reverse().join("");
// }
// console.log(isPalidrome("racecar"));

function isPalidromeNumber(num) {
  let numberCopy = num;
  let reverseNum = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return numberCopy === reverseNum;
}

// console.log(isPalidromeNumber(1201));

// Question 5: Find nth Fibonacci number

function Fibonacci(num) {
  let a = 0,
    b = 1;

  for (let i = 0; i < num; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}

// console.log(Fibonacci(2));

// Question 6: Missing Number in an Array

function MissingNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log("sum", sum);

  return (arr.length * (arr.length + 1)) / 2 - sum;
}

// console.log(MissingNumber([3, 1, 2, 5, 0]));

// Question 7 : Count Odd Numbers in an Interval Range

function FindOddCount(low, high) {
  let count = 0;
  for (i = low; i <= high; i++) {
    if (i % 2 != 0) {
      count++;
    }
  }
  return count;
}

// console.log(FindOddCount(3, 7));
// console.log(FindOddCount(8, 10));

// Question 8. Fizz Buzz
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

function FizzBuzz(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 == 0) {
      arr.push("Fizz");
    } else if (i % 5 == 0) {
      arr.push("Buzz");
    } else {
      arr.push(i.toString());
    }
  }

  return arr;
}

// console.log(FizzBuzz(3));
// console.log(FizzBuzz(5));
// console.log(FizzBuzz(15));

// Question 9. Power of Two
// Easy
// Topics
// Companies
// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

function PowerofTwo(num) {
  if (num < 1) return false;
  while (num > 1) {
    if (num % 2 != 0) return false;
    num = num / 2;
  }
  return true;
}

// console.log(PowerofTwo(16));

var mySqrt = (x) => {
  if (x < 2) {
    return x;
  }

  let i = 1;
  while (i * i <= x) {
    i++;
  }
  return i - 1;
};

console.log(mySqrt(3));
