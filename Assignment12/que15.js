const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter countdown seconds: ", (input) => {
  let remainingTime = parseInt(input);

  if (isNaN(remainingTime) || remainingTime <= 0) {
    console.log("Please enter a valid positive number!");
    rl.close();
    return;
  }

  console.log(`Starting countdown from ${remainingTime} seconds...`);

 
  const intervalId = setInterval(() => {
    console.log(`Time left: ${remainingTime}s`);
    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(intervalId);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);
  const checkKeyPress = () => {
    rl.on("line", (input) => {
      if (input.toLowerCase() === "s") {
        clearInterval(intervalId);
        console.log("Countdown stopped by user!");
        rl.close();
      }
    });
  };
  setTimeout(checkKeyPress, 500);
});
