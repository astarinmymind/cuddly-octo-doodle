// basic types: number, string, boolean, arrays, tuples, enums, unions, any

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 5; 
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);

/* Tuples */
const person1: { // note: explicit object type to enforce tuples
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // tuple edge case w/ .push
} = {
    name: 'Angela',
    age: 19, 
    hobbies: ['Coding', 'Skating'],
    role: [2, 'Author']
}

/* Enums */
enum Role { ADMIN, READONLY, AUTHOR };

const person2 = { // object type inference
    name: 'Angela',
    age: 19, 
    hobbies: ['Coding', 'Skating'],
    role: Role.ADMIN
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person2.name);

for (const hobby of person2.hobbies) {
    console.log(hobby.toUpperCase());
}

/* Unions */
function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(23, 26);
console.log(combinedAges);

const combinedNames = combine('Ang', 'ela');
console.log(combinedNames);

// unknown type --a better alternative to any
let userInput: unknown;
let userName: string; 

userInput = 3;
userInput = 'Hi';
if (typeof userInput === 'string') {
    userName = userInput;
}

// never type --used to specify never returns (usually errors)
function generateError(message: string, code: number): never { 
    throw { message: message, errorcode: code};
}
generateError('An error occured!', 500);