//operators are symbols that perform operations on variables and values

//arithmetic operators
//assignment operators
//comparison operators
//logical operators 
//conditional (ternary) operators
//logical  operator


//arithmetic operators ==> Arithmetic operators are used to perform mathematical operations such as addition, subtraction, multiplication, and division.
//+ Addition
//- Subtraction
//* Multiplication
/// Division
//% Modulus
//++ Increment (x++ ==> post increment, ++x ==> pre increment)
//-- Decrement (x-- ==> post decrement, --x ==> pre decrement)

let a = 10;
let b = 5;
console.log("Addition:", a + b); //15
console.log("Subtraction:", a - b); //5
console.log("Multiplication:", a * b); //50
console.log("Division:", a / b); //2
console.log("Modulus:", a % b); //0 explanation: remainder of 10/5 is 0
console.log("Post Increment:", a++); //10 (returns the value before increment)
console.log("Value of a after Post Increment:", a); //11
console.log("Pre Increment:", ++b); //6 (increments b first, then returns the value)
console.log("Post Decrement:", a--); //11 (returns the value before decrement)
console.log("Value of a after Post Decrement:", a); //10
console.log("Pre Decrement:", --b); //5 (decrements b first, then returns the value)    


//assignment operators ==> Assignment operators are used to assign values to variables.
//= Assignment
//+= Addition Assignment
//-= Subtraction Assignment
//*= Multiplication Assignment
///= Division Assignment
//%= Modulus Assignment
let c:number = 20;
c+=10; //c = c + 10 ==> 30
console.log("additionAssignment:" , c); //30
c-=5; //c = c - 5 ==> 25
console.log("subtractionAssignment:" , c); //25
c*=2; //c = c * 2 ==> 50
console.log("multiplicationAssignment:" , c); //50
c/=5; //c = c / 5 ==> 10
console.log("divisionAssignment:" , c); //10
c%=3; //c = c % 3 ==> 1 explanation: remainder of 10/3 is 1
console.log("modulusAssignment:" , c); //1          


//comparison operators ==> Comparison operators are used to compare two values and return a boolean result (true or false).
//== Equal to
//=== Strict equal to
//!= Not equal to
//!== Strict not equal to
//> Greater than
//< Less than
//>= Greater than or equal to
//<= Less than or equal to
let x:number = 10;
let y:any = "10";
console.log("Equal to:", x == y); //true (compares values only)
console.log("Strict equal to:", x === y); //false (compares value and type)
console.log("Not equal to:", x != y); //false
console.log("Strict not equal to:", x !== y); //true
console.log("Greater than:", x > y); //false
console.log("Less than:", x < y); //false
console.log("Greater than or equal to:", x >= y); //true
console.log("Less than or equal to:", x <= y); //true
console.log("Strict not equal to:", x !== y);

//4. Logical Operators: These operators are used to combine multiple conditions.
//&& Logical AND
//|| Logical OR
//! Logical NOT

let i: number = 10;
let j: number = 20;
console.log("Logical AND: " + (i > 5 && j > 15)); //true and true = true
console.log("Logical OR: " + (i > 15 || j > 15)); //false or true = true
console.log("Logical NOT: " + !(i > 5));// not true = false

//5. Conditional (Ternary) Operator: This operator is used to evaluate a condition and return one of two values based on the result of the condition.
//condition ? valueIfTrue : valueIfFalse
let age:number = 17;
let canVote: string = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log("Can Vote: " + canVote);
