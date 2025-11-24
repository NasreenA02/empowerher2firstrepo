//part a
if (true) {
}

let x = 10;
var y = 20;

console.log(y);
console.log(x);
//part b
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile.user?.details?.email);
console.log(profile.user?.details?.phone);
//part c
const user = {
  name: "Nasreen",
};
console.log(user.address?.city);   // undefined, no error!