let balance = 0;

// Function to handle deposits
function deposit(amount) {
    balance += amount;
    console.log(`Deposited $${amount} into your account.`);
}

// Function to handle withdrawals
function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrawn $${amount} from your account.`);
    } else {
        console.log("Insufficient funds.");
    }
}

// Function to check balance
function checkBalance() {
    console.log(`Your current balance is $${balance}.`);
}

// Test the functions
deposit(100);
withdraw(50);
checkBalance();
