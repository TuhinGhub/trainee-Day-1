class BankAccount {
 constructor(owner,balance=0){
   this.owner=owner;
   this.balance=balance; 
}

deposit(amount) {
    if (amount < 0) {
        console.log("invalid depoist");
    }
    this.balance+=amount;
    return this.balance;
}

withdraw(amount) {
    if(amount<0)
    console.log("Invalid amount");
    if(amount>this.balance)
    console.log("Insufficient balance");
    this.balance-=amount;
    return this.balance;
   }

   displayBalance() {
        return this.balance;
   }
}


const user = new BankAccount('John',500);
user.deposit(7000);
user.withdraw(200);
console.log(user.displayBalance());