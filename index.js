// Type Annotation
// let a: number = 34;
// console.log(a);
// Restrict Data Type --------------------------------------
// let fullName: string = "Allen";
//fullName = 54; // show error -> Type 'number' is not assignable to type 'string'
// fullName = "Samuel";
// console.log(fullName);
// let num: number = 22;
// num = "Sam"; // show error
// num = 55;
// console.log(num);
// Array ----------------------------------------------------------------
// const data: string[] = [];
// data.push(1); // show error -> Argument of type 'number' is not assignable to parameter of type 'string'.
// data.push("0", "jdnkjcsdj");
// console.log(data);
// Function --------------------------------------------------------------------
// function sum(a: number, b: number): number {
//     return a + b
// }
// console.log(sum(1, 5));
///------------------------------------------------------------------
// function sum(a: number, b: string): string {
//     return a + b
// }
// console.log(sum(1, "5"));
// Tuples -----------------------------------------------------------------------
// let address: [number, string, number];
// address = ["545" , 54 , 54] // show error
// address = [220 , "54" , 54 ,"shjvd"] // show error -> Source has 4 element(s) but target allows only 3.
// address = [55, "New York", 54];
// Object ---------------------------------
// let person: { name: string };
// person = { name: "Nex" }
// person = {name: "Nex" , age: 14} // show error -> Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; }'.
// Optional value -------------------------------
// let anotherPerson: { name: string, age?: number};
// anotherPerson = { name: "Nex", age: 25 } 
// anotherPerson = { name: "Nex"} // valid
// console.log(anotherPerson)
// Optional value in Function ---------------------
function Sum(a, b) {
    return b ? a + b : a;
}
console.log(Sum(9025, 25));
