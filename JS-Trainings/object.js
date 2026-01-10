let detailsOfPerson = {
    name : "Shareef",
    age : 29,
    visa : true,
    address: [
        {
            city : "Hyd",
            state : "TS",
            country : "India"
        },{
           city : "KMM",
            state : "AP",
            country : "Bharat" 
        }
    ]

}
console.log(detailsOfPerson.address[0].city);
console.log(detailsOfPerson.address[1].city);
console.log(detailsOfPerson.name);
console.log(detailsOfPerson.visa);

let fruits = ["apple", "Banana", "Mango", "Orange"]
let fruitsAndPrices = ["apple", 20, "Banana", 30,  "Mango", 40, "Orange" , 50]
console.log(fruits[2]);
console.log(fruitsAndPrices[3]);