//number data type
let marks:number = 90;
let percentage:number = 98.9;

console.log("Marks:",marks);
console.log("Percentage:",percentage);

//string data type
let studentName:string = "Shareef"; //double quote syntax
let name:string = 'John Doe'; //single quote syntax
let name3:string = `Alice`; //backtick syntax
console.log("Student Name:",studentName);
console.log("Name:",name);
console.log("Name3:",name3);

//boolean data type
let visaAtatus:boolean = true;
let isGraduated:boolean = false;

console.log("Visa Status:",visaAtatus);
console.log("Is Graduated:",isGraduated);   

//union data type
 let empaddress: string | number | boolean;
 
 empaddress = "Hyderabad";
 empaddress = 501505;
 empaddress = true;
    console.log("Employee Address:",empaddress);

//Undefined data type
let empSalary : undefined |number;
empSalary = 60000;
console.log("Employee Salary:",empSalary);

//null data type
let empRole: null | string;
empRole = null;
empRole = "Developer";
console.log("Employee Role:" + empRole);

//NON PRIMITIVE DATA TYPES


//array data type ==> Array represent collection of similar data types
let fruits:string[] = ["Apple","Banana","Grapes","Mango"];
console.log("Fruits:",fruits);
let scores:number[] = [10,20,30,40,50];
console.log("Scores:",scores); 

//fruits names with prices
let fruitsWithPrice:(String |Number)[] = ["Apple", 100,"Banana", 50, "Grapes", 200, "Mango", 150];
console.log("Fruits with Prices:",fruitsWithPrice);


//objects represent collection of key-value pairs, in TS we use interface to define the structure of an object
interface empDetails{
    empID: number;
    empName: string;
    havingVisa: boolean;
    address:{
        city:string;
        zipCode:number;
        state:string;
        country:string;
    }
}

let empInfo1:empDetails = {
    empID: 101,
    empName: "Shareef",
    havingVisa: true,
    address:{
        city:"Hyderabad",
        zipCode:501505,
        state:"Telangana",
        country:"India"
    }
}
console.log("Employee Info:",empInfo1);
console.log("Employee city:", empInfo1.address.city);

//tuple data type ==> Tuples are used to store multiple values in a single variable, where each value can be of a different type.
let address : [string,string,number,string,string] = ["Hyderabad","Telangana",501505,"India","Asia"];
console.log("Address:",address);
console.log("City:",address[0]);
console.log("State:",address[1]);
console.log("ZipCode:",address[2]);


//function data type, functions represent a block of code designed to perform a particular task

function launchTheAppp(browserName:string,url:string):void{

    console.log("Launch the browser" , browserName);
    console.log("Launch the browser" + browserName);
    console.log("Navigate to URL", url)
    console.log("Applicaton launched successfully");    
}
launchTheAppp("Chrome","https://www.google.com");

// map data type ==> Maps are used to store key-value pairs where keys can be of any data type.
let employeeMap: Map<String,Number> = new Map();
employeeMap.set("empID",101);
employeeMap.set("salary",60000);
employeeMap.set("age",30);
employeeMap.set("bonus",5000);

console.log("Employee map",employeeMap);
console.log("Employee ID:",employeeMap.get("empID"));

//set data type ==> Sets are used to store unique values of any data type.
let uniqueEmployeeID: Set<Number> = new Set();
uniqueEmployeeID.add(2110701);
uniqueEmployeeID.add(2110702);
uniqueEmployeeID.add(2110703);
uniqueEmployeeID.add(2110701); //duplicate value, will be ignored   

console.log("Unique Employee IDs:",uniqueEmployeeID);

