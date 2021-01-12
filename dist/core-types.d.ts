declare function add(n1: number, n2: number, showResult: boolean, phrase: string): number | undefined;
declare const number1 = 5;
declare const number2 = 2.8;
declare const printResult = true;
declare const resultPhrase = "Result is: ";
declare const result: number | undefined;
declare const person1: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
};
declare enum Role {
    ADMIN = 0,
    READONLY = 1,
    AUTHOR = 2
}
declare const person2: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role;
};
declare let favoriteActivities: string[];
declare function combine(input1: number | string, input2: number | string): string | number;
declare const combinedAges: string | number;
declare const combinedNames: string | number;
declare let userInput: unknown;
declare let userName: string;
declare function generateError(message: string, code: number): never;
//# sourceMappingURL=core-types.d.ts.map