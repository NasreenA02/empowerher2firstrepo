//Part A
const username = "Nasreen";
const course = "JavaScript";
console.log(`Hello ${username}, welcome to the ${course} course!`);
//Part B
const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};
console.log(student.name);
student.greet();
//Part C
const getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName("Nasreen", "Ansari"));
