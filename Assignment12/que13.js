
let counter = 0;

const intervalId = setInterval(() => {
  console.log("Loading...");
  counter++;

  if (counter === 5) {
    clearInterval(intervalId);
    console.log("Loaded successfully!");
  }
}, 1000); 
