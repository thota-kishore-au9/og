// calci.js
const modDesc = "This module is for calci";

function add(x, y) {
    return x + y;
}

function div(x, y) {
    return x / y;
}

class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    getDetails() {
        return `Employee Name: ${this.name}, Employee ID: ${this.id}`;
    }
}

module.exports = { 
    add, 
    modDesc,
    div, 
    Employee 
};
