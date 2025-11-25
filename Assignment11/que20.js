// quetion 1
function createCounter() {
  let count = 0; 

  return {
    increment: function() {
      count++;
      console.log("Current count:", count);
    },
    decrement: function() {
      count--;
      console.log("Current count:", count);
    },
    display: function() {
      console.log("Current count:", count);
    }
  };
}


const counter1 = createCounter();
counter1.increment(); 
counter1.increment(); 
counter1.decrement(); 
counter1.display();   

//multiple counter
const counter2 = createCounter();
counter2.increment(); 
counter1.display();   


// question 2

function createBankAccount() {
  let balance = 0;             
  let transactionHistory = [];   

  return {
    deposit: function(amount) {
      balance += amount;
      transactionHistory.push(`Deposited: ${amount}`);
      console.log(`Deposited: ${amount}`);
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        transactionHistory.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
      } else {
        console.log("Insufficient balance");
        transactionHistory.push(`Failed withdrawal: ${amount}`);
      }
    },
    getBalance: function() {
      console.log("Current balance:", balance);
      return balance;
    },
    getTransactionHistory: function() {
      console.log("Transaction history:", transactionHistory);
      return [...transactionHistory]; 
    }
  };
}


const account = createBankAccount();
account.deposit(500);          
account.withdraw(200);          
account.withdraw(400);         
account.getBalance();          
console.log(account.balance);   
account.getTransactionHistory(); 

