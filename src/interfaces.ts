/* Interfaces are used for typechecking structure of objects */
interface Person { 
    readonly name: string;
    age?: number; // "?" indicates optional property

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Angela', 
    age: 19, 
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

user1.greet('Hi there, I am');

interface Greetable { 
    readonly name: string;

    greet(phrase: string): void;
}

class American implements Person, Greetable {
    name: string; // note: also readonly due to interface
    age: number;
    // can add more 
    citizen: boolean; 

    constructor(n: string, a: number, c: boolean) {
        this.name = n; 
        this.age = a;
        this.citizen = c;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user2: Person; // allowed
user2 = new American('Cat', 26, true);

/* Interface Inheritance */
interface Female extends Person, Greetable {
    shoeSize: number;
}

/* Interface Function Types */
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
    return n1 + n2;
}