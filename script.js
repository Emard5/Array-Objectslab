//Part 1: Refactoring old code

// let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// let rows = csvStr.split("\n");             
// let headers = rows[0].split(",");          

// let result = [];

// for (let i = 1; i < rows.length; i++) {
//     let values = rows[i].split(",");       
//     let obj = {};

//     for (let j = 0; j < headers.length; j++) {
//         obj[headers[j]] = values[j];       
//     }

//     result.push(obj);                      
// }

// console.log(result);



// Part 2 Expanding Functionality

// let columnNum = headers.length

// let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// let rows = csvStr.split("\n");
// let headers = rows[0].split(",");

// let table = []
// table.push(headers);
// console.log(table);

// for (let i = 1; i < rows.length; i++) {
//     let values = rows[i].split(",");
//     table.push(values);


// }

// console.log(table);


let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

let rows = csvStr.split("\n");
let headers = rows[0].split(",");

let output=[]

for(i=1;i<rows.length; i++){
    let data= rows[i].split(",")
    let user={}
    user.id = data[0]
    user.name= data[1]
    user.occupation= data[2]
    user.age= data[3]

   output.push(user)
}

console.log(output)