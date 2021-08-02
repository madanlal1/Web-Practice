const fs = require('fs');

const bioData = {
    name : "Madan",
    age : 21,
    gender : "male"
}

//convert obj into JSON format
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

//convert JSON data into orig data
const origData = JSON.parse(jsonData);
console.log(origData);

//write JSON data into JSON file.
fs.writeFile('JSON1.json', jsonData, (err) => {
    console.log("done");
});

//read data from JSON file
fs.readFile('JSON1.json', 'utf-8', (err,data) => {
    console.log(data);
})