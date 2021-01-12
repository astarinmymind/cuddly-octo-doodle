class Department {
    // id: string; 
    // name: string;
    
    /* private keyword: only methods inside this class can access */ 
    private employees: string[] = [];
    
    /* protected keyword: only methods inside this class and classes that inherit from this class can access */
    protected budget: number;

    // uses shorthand initialization
    // readonly property: value cannot be changed
    // if add "private" keyword to constructor, only one instance of the class is allowed ("singleton class")
    constructor(private readonly id: string, public name: string) {}

    // static properties and methods: when you don't need to instantiate a class to access 
    static year = 2021;
    static createEmployee(name: string) {
        return { name: name };
    }

    // add extra type safety with "this" parameter 
    describe(this: Department) {
        console.log('Department: ' + this.name);
    }

    // only way to change private employee variable
    addEmployee(employee: string) { 
        this.employees.push(employee);
    }

    // getter method
    get firstEmployee() {
        if (this.employees) {
            return this.employees[0];
        }
        throw new Error('No employee found.');
    }

    // setter method
    set firstEmployee(name: string) {
        if (!name) {
            throw new Error('Please pass in a valid name!');
        }
        this.addEmployee(name);
    }
}

const accounting = new Department('D1', 'Accounting');
console.log(accounting);
accounting.describe();

// access private variable using getter method
console.log(accounting.firstEmployee);
// set private variable using setter method
accounting.firstEmployee = 'Alice';

// using static 
const employee1 = Department.createEmployee('Bill');
console.log(employee1, Department.year);

// the following breaks without the "this" parameter in class methods
// const accountingCopy = { name: 'dummy', describe: accounting.describe};
// accountingCopy.describe();

/* Inheritance */ 
class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) { 
        super(id, 'IT'); // "super" keyword must be used in a constructor of a class that inherits from another class
        this.admins = admins; // "this" keyword can only be used after "super" keyword
    }
}

/* Abstract Classes: when one method must be implemented by all classes that inherit from it */ 
/* Note: abstract classes cannot be instantiated themselves, can only be inherited */
abstract class School {
    abstract size(this: Department): void;
}