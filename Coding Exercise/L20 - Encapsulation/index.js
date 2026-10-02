class BankAccount {
    #balance;

    constructor(initialBalance){
        this.#balance = initialBalance;
    }

    deposit(amount){
        if(amount>0){
            this.#balance += amount;
            console.log(`Deposited ${amount}. New balance ${this.#balance}`);
        }else{
            console.log('Invalid deposit amount');
        }
    }

    withDraw(amount){
        if(amount>0 && amount<=this.#balance){
            this.#balance -= amount;
            console.log(`Withdraw ${amount}. New Balance ${this.#balance}`);
        }else{
            console.log(`Insufficient Fund or Invalid amount`);
        }
    }

    getBalance(){
        console.log(this.#balance);
    }
}

let savingAccount = new BankAccount(1000);
savingAccount.deposit(500);
savingAccount.withDraw(200);
savingAccount.getBalance();