console.log("string started 19 sep 2025");

let firstNmae = "Rajan";

// elemement presnt or not
console.log(firstNmae.includes("a"));

// Accessing the element

console.log(firstNmae.charAt(4));
console.log(firstNmae.indexOf("a"));

let anotherName = "Rajn";

console.log(firstNmae.localeCompare(anotherName)); // match return 0 if false return -1

// replace the words

const str =
  "hello my name is Rajan gupta i am software enginer , Rajan is ......";

console.log(str.replace("Rajan", "Vishal"));
console.log(str.replaceAll("Rajan", "Vishal"));

// substring of string

// both work are same only one diffrence is slic can take negative number

const str1 = "Hello my name is Rajan ";

console.log(str1.substring(5));
console.log(str1.slice(5, 9));

// convert one data type to another

const num = 1234;

const obj = {
  name: "Rajan",
  age: 20,
};

console.log(typeof num.toString());

console.log(typeof obj.toString(obj));
console.log(JSON.stringify(obj));
