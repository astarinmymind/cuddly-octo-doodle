/* Generics: flexibility with type safety */

/* Generic vs. Union types: 
- use generic when you want to use the same type throughout an instance
- use union when you are flexible for the type of each variable, function, ...

/* Generic Types */
const namez: Array<string> = []; // string[]
namez[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('10');
  }, 2000);
});

promise.then(data => {
  data.split(' ');
})

/* Generic Functions */
// "... extends ..." enforces constraints on T and U 
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
  
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);

/* Using interfaces to enforce generic type but with length property */
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

/* "keyof" constraint: enforce existence of key in object */ 
function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');

/* Generic Classes */
class DataStorage<T extends string | number | boolean> {
private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'});
// // ...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

/* Generic Utility Types */
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

// "Partial" Keyword: turns all properties optional so can initialize empty and add one by one
function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal; // cast after completion
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();