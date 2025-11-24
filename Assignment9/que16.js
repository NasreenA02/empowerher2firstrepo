//part a
const isEven = n => n % 2 === 0;
console.log(isEven(4));
//part b
const marks = 31;
const result = marks >= 35 ? "Pass" : "Fail";
console.log(result);
//part c
const greet = name => console.log(`Hello, ${name ? name : "Guest"}`);
console.log(greet("nasreen"))
console.log(greet())