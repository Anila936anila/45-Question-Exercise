// Tests for equality and inequality which strings
const str1: string = "Hello";
const str2: string = "hello";
console.log(str1 === str2); // False
console.log(str1 !== str2); //True

// Test using the lower case function
const text1: string = "Hello World";
const text2: string = "hello world";
console.log(text1.toLowerCase() === text2); // True

// Numerical Testing
const num1: number = 10;
const num2: number = 5;

console.log(num1 ===2); // False
console.log(num1 !==num2); //true
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 >= num2); //true
console.log(num1 <= num2); //false

//text using "and" and "or" operators
const x: number = 5;
const y: number = 10;
const z: number = 15;

console.log(x < y && y < z); // true, both condition are true
console.log(x < y || y > z); // true, at least one
console.log(x > y && y < z); // false both
console.log(x > y || y > z); // false, both conditions are false

// Test whether an item is an array
const fruits: string[] = ['apple', 'banana', 'orange', 'grapes'];

console.log(fruits.includes('banana')); //true
console.log(fruits.includes('kiwi')); //false

// Test whether an item is not an array
const colors: string[] = ['red', 'yellow', 'green', 'blue'];

console.log(!colors.includes('purple')); //true
console.log(!colors.includes('green')); //false
