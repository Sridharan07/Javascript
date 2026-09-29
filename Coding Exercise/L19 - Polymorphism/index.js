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

class Employee extends Person {
    constructor(firstname, lastname, dob, phoneNo, isEmployed, jobTitle, company){
        super(firstname, lastname, dob, phoneNo, isEmployed);
        this.jobTitle = jobTitle;
        this.company = company;
    }

    //Overrdiding the getDetails Method
    getDetails(){
        const age = new Date().getFullYear() - this.dob;
        console.log(`${this.firstname} ${this.lastname} is ${age} old, work as ${this.jobTitle} at ${this.company}`)
    };

    getJobDetails(){
        console.log(`${this.firstname} ${this.lastname} work as a ${this.jobTitle} at ${this.company}.`)
    }
}

let anni = new Employee('Sri', 'Amirta', 2001, 32547895, true, 'Product Designer', 'SurgeTech' );
anni.getJobDetails();
anni.getEmployementStatus();
anni.getDetails();