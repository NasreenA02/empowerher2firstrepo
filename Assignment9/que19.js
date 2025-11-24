//1. Template Literals + Expressions
//a)
console.log(`Prime 5 + 7 = ${5 + 7}`);
//b)
const message = `Line 1
Line 2
Line 3`;
console.log(message);
//c)
const firstName = "Nasreen";
const lastName = "Ansari";
console.log(`${firstName} ${lastName}`);

//2. Arrow Functions & this
// a
const square = n => n * n;
console.log(square(4));
// b)  Arrow functions don’t have their own 'this', they use outer context.
// c
const obj = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj.test();

//3. Rest, Spread & Copying Objects
// a
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };
console.log(productCopy);
// b
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);
// c
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(3, 5, 9, 2));
//4. Destructuring & Optional Chaining
// a
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);
// b
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);
// c
const info = {};
console.log(info.user?.name);
//5. Scoping (let/var/const)
// a) 
for (var i = 0; i < 3; i++) {}
console.log(i); 

// b)
for (let j = 0; j < 3; j++) {}
//console.log(j); // ReferenceError

// c) 
const pi = 3.14; // cannot reassign
//6. Ternary Operator
// a
let kmph = 50;
let speed = kmph >= 60 ? "Fast" : "Normal";
console.log(speed);

// b
let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");

// c
let num = 0;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");
//7. Spread, Rest & Arrays
// a
const nums = [1,2,3];
const newNums = [...nums, 4, 5];
console.log(newNums);

// b
const arrA = ["x","y"];
const arrB = ["2"];
const combined = [...arrA, ...arrB];
console.log(combined);

// c
const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));
//8. Object Destructuring & Shorthand
// a
const user1 = { id: 101, status: "active" };
const { id, status } = user1;
console.log(id, status);

// b
const id2 = 101;
const role = "admin";
const user2 = { id2, role };
console.log(user2);

// c
const user3 = {
  id: 1,
  greet() { console.log("Hi"); }
};
user3.greet();
//9. Template Literals (More Practice)
// a
console.log(`Today is ${new Date().toDateString()}`);

// b
const NAME = "Alice";
const SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);
// 10. Arrow Function Shorthands
// a
const add = (a,b) => a + b;
console.log(add(3,5));

// b
const isAdult = age => age >= 18;
console.log(isAdult(17));

// c
const double = n => n*2;
console.log(double(4));


//11. Spread Operator (Arrays & Objects)
// a
const arr1 = [1,2,3];
const cloneArr = [...arr1];
console.log(cloneArr);

// b
const newArr = [100, ...arr1];
console.log(newArr);

// c
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 5, c: 3 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);


//12. Optional Chaining (More Practice)
const user4 = { name: "Alex", address: { city: "Bangalore" } };

// a
console.log(user4.address?.city);

// b
console.log(user4.job?.title);

// c
const company = {};
console.log(company.department?.manager?.name);
