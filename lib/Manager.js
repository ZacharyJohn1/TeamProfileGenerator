const Employee = require('./Employee');


class Manager extends Employee {
    constructor (name, employeeID, email, officeNumber) {

        super (name, employeeID, email); 
        
        this.officeNumber = officeNumber; 
    }

    getRole () {
        return "Manager";
    }
}


module.exports = Manager;   