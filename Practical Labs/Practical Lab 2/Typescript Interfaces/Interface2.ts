interface BankAccount {
    holder: string;
    balance: number;
    deposit: (amount: number) => void;
    withdraw: (amount: number) => void;
}
//Object
const account: BankAccount = {
    holder: "Nomthandazo",
    balance: 1800,
 
    deposit(amount) {
        this.balance += amount;
        console.log(`+ R${amount} → R${this.balance}`);
    },

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`- R${amount} → R${this.balance}`);
        } else {
            console.log("Not enough money");
        }
    }}

account.deposit(500);     
account.withdraw(1000);   
account.withdraw(2000);  