// Question 2

const printTheMaxNumber = (num1, num2, num3) => {
  let max;
  if (num1 >= num2 && num2 >= num3) {
    max = num1;
  } else if (num2 >= num3) {
    max = num2;
  } else {
    max = num3;
  }

  return max;
};

console.log(printTheMaxNumber(10, 10, 5));
// ---------------------------------------------

// Question 2

const checkNumber = (num) => {
  if (num > 0) {
    return "Postive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "zero";
  }
};

console.log(checkNumber(-3));
// ---------------------------------

// Question 3

const calculateBill = (unit) => {
  let bill = 0;
  if (unit >= 0 && unit <= 100) {
    return (bill = unit * 5);
  } else if (unit <= 200) {
    return (bill = 100 * 5 + (unit - 100) * 7);
  } else if (unit <= 300) {
    return (bill = 100 * 5 + 100 * 7 + (unit - 200) * 10);
  } else {
    return (bill = 100 * 5 + 100 * 7 + 100 * 10(unit - 300) * 12);
  }
};

console.log(calculateBill(230));
//----------------------------

// Question 4

// fist solution
// function checkCharater(char) {
//   if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//     return "Vovel";
//   } else {
//     return "consonent";
//   }
// }

function checkCharater(char) {
  if ("aeiou".includes(char.toLowerCase()) && char !== "") {
    return "vowel";
  } else if (/[a-z]/.test(char.toLowerCase())) {
    return "consonant";
  }

  return "InValid char";
}

console.log(checkCharater("e"));

// Question 5

function checkLeapYear(year) {
  if (year % 4 == 0 && year % 400 == 0 && year % 100 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkLeapYear(2004));
