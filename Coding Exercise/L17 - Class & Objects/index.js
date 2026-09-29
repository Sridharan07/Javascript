class Person {
    constructor(firstname, lastname, dob, phoneNo, isEmployed) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
        this.phoneNo = phoneNo;
        this.isEmployed = isEmployed;
    }

    getDetails(){
        const age = new Date().getFullYear() - this.dob;
        console.log(`${this.firstname} ${this.lastname} is ${age} old and contact no is ${this.phoneNo}`)
    };

    getEmployementStatus(){
        console.log(`${this.firstname} is ${this.isEmployed ? 'employed' : 'unemployed'}`);
    }
}

let anni = new Person('Sri', 'Amirta', 2001, 32547895, false);
anni.getDetails();
anni.getEmployementStatus();