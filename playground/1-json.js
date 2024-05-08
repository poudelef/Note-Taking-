// Creating in a file system, read and write on file
const fs  =require('fs')


// ..............................................................................................................................................

// // this is java scripit object
// const book ={
//     title:'Edo is the enemy',
//     author:'Ryan Holiday'
// }

// // converting javascript object to JOSN (Json.stringify) which is basically sting. 
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// ...............................................................................................................................................

// What comes back while reading from file is not a string, it is actualy a buffer
// which is a way for ndoe js to represent binary data. 
// to convert data from binary to string use toString()
// ....................................................................................................................

// const dataBuffer  = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)
// console.log(data.title)

// ............................................................................................................................



// bookJson is json not book object.
// // it doesn't have book.title property.
// console.log(bookJSON)

// //Json.stringify takes object and gives us a json string back
// //Json.parse takes json string and give us object back .
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

const dataBuffers = fs.readFileSync('1-json.json')
const dataJson = dataBuffers.toString()
const dataObject = JSON.parse(dataJson);

dataObject.name = "Sambhav Poudel";
dataObject.age = "200";

const newJSONdata = JSON.stringify(dataObject);
// converts object into json. 

fs.writeFileSync('1-json.json',newJSONdata);
