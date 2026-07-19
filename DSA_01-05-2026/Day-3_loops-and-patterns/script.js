// Question 1

const row1 = 5;

for (let i = 1; i <= row1; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str = str + "*";
  }
  console.log(str);
}

console.log("-----------------------------/n");
console.log("-----------------------------/n");
console.log("-----------------------------/n");
console.log("-----------------------------/n");

// Question 2

const row2 = 5;

for (let i = row2; i >= 1; i--) {
  let str = "";
  for (let j = i; j >= 1; j--) {
    str = str + "*";
  }

  console.log(str);
}

// Question 3

console.log("\n");
console.log("\n");
console.log("-------------------------------------");

const row3 = 5;

for (let i = 1; i <= row3; i++) {
  let str = "";
  for (let k = 1; k <= row3 - i; k++) {
    str = str + " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    str = str + "*";
  }
  console.log(str);
}

console.log("\n");
console.log("\n");
console.log("-------------------------------------");

// Question 4

const n = 5;

for (let i = n; i >= 1; i--) {
  let str = "";

  for (let k = 0; k < n - i; k++) {
    str = str + " ";
  }
  for (let j = 2 * i - 1; j >= 1; j--) {
    str = str + "*";
  }

  console.log(str);
}

// Question 5
console.log("\n");
console.log("\n");
console.log("-------------------------------------");

const row5 = 5;

for (let i = 1; i <= row5; i++) {
  let str = "";
  for (j = 1; j <= row5; j++) {
    if (i == 1 || i == row5 || j == 1 || j == n) {
      str = str + "*";
    } else {
      str = str + " ";
    }
  }

  console.log(str);
}

// Question 6

console.log("\n");
console.log("\n");
console.log("---------------6----------------------");

const row6 = 5;

for (let i = 1; i <= row6; i++) {
  let str = "";

  for (let j = 1; j <= row6 - i; j++) {
    str = str + " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    if (i == 1 || i == row6 || k == 1 || k == 2 * i - 1) {
      str = str + "*";
    } else {
      str = str + " ";
    }
  }

  console.log(str);
}

// Question 7

console.log("\n");
console.log("\n");
console.log("---------------7---------------------");

const row7 = 5;

for (let i = 1; i <= row7; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    if ((i + j) % 2 == 0) {
      str = str + "1";
    } else {
      str = str + "0";
    }
  }

  console.log(str);
}
