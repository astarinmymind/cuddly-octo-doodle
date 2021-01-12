/* Variables */
const user = 'Angela' // const can't be changed
let age = 19 // scoped to block

/* Arrow Functions */ 
const add3 = (a: number, b: number) => {
    return a + b;
}

// if only one expression, can omit curly braces
const add4 = (a: number, b: number) => a + b;

const printOutput = (output: string | number) => {
    console.log(output);
}

printOutput(add4(6,6));

const button = document.querySelector('button');
if(button) {
    button.addEventListener('click', event => console.log(event));
}

/* Default Function Parameters */
const add5 = (a: number, b: number = 1) => a + b;
printOutput(add5(6));

/* Spread Operator: used to list all elements of an object */
const hobbies = ['Sports', 'Reading']
const activeHobbies = ['Art', ...hobbies]

activeHobbies.push(...hobbies)

const person = {
    firstName: 'Max', 
    curAge: 65
}

const ptrPerson = person; 
const copiedPerson = { ...person }; 

/* Rest Parameters */ 
const add6 = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}

const addedNumbers = add6(6, 5, 8)

/* Array Destructuring */ 
const [hobby1, hobby2, ...remainingHobbies] = hobbies // destructured in order

/* Object Destructuring */ 
const { firstName: username, curAge } = person // destructured using key-value pairs
console.log(username) // can change key like this













