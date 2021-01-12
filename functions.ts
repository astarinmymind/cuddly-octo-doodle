/* Functions */ 

// return type typically inferred but can be explicit
function add(n1: number, n2: number): number {
    return n1 + n2;
}

// return type is inferred void if no return
function printResult(num: number): void { 
    console.log('Result: ' + num);
}

// function types
let combineValues: (a: number, b: number) => number; 
combineValues = add;
console.log(combineValues(9, 9));

// callback functions
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2; 
    cb(result);
}
addAndHandle(10, 20, (result) => {console.log(result);})

