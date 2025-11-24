//part a
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merged = [...arr1, ...arr2];  
console.log(merged);
//part b
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3)); 
//part c
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const { name, address: { city, pin } } = user;
console.log(name, city, pin);
