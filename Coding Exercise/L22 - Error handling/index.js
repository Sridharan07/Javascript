class Bank {
    users = [
        { accountNo: 443301, balance: 12000, username: 'Jackie', password: '1234'},
        { accountNo: 443302, balance: 35000, username: 'Julie', password: '1234'},
        { accountNo: 443303, balance: 15000, username: 'Bheema', password: '1234'},
    ];

    getBalanceWithoutErrorHandling(accountNo) {
        const result = this.users.find((x) => x.accountNo === accountNo);
        console.log(`Balance:${result.balance}, Account holder:${result.username}`);
    }

    getBalance(accountNo, password){
        try{
            const result = this.users.find((x) => x.accountNo === accountNo);
            if(!result) {
                throw `Invalid Account No ${accountNo}`;
             }

             const isValidPassword = result.password === password;

             if(!isValidPassword){
                throw `Wrong Password`;
             }
             return `Balance: ${result.balance}, Account holder:${result.username}`

        } catch (error) {
            return error;
        } finally{
            console.log('Process is completed');
        }
    }
}

let stateBank = new Bank();
console.log(stateBank.users);
stateBank.getBalance(443301, '1234');

const formElement = document.getElementById('formData');
const displayMessage = document.getElementById('displayMessage');

formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const request = { accountNo: null, password: ''};

    formData.forEach((value, key) => {
        request[key] = value;
});

let indianBank =new Bank();

const response = indianBank.getBalance(Number(request.accountNo), request.password)
displayMessage.innerHTML = response;
formElement.reset();

})