//import module......
// const fs = require('fs');

//write in file synchronously................
// fs.writeFileSync('file.txt', 'welcome to node JS ');

//append data in same file synchronously.................
// fs.appendFileSync('file.txt', ' we are appending text in file system module.');

//buffer data from file................
// const buff_data = fs.readFileSync('file.txt');

//encode buffered data................
// const fileData = buff_data.toString();

//console data.............
// console.log(fileData);


//make folder..................
// fs.mkdirSync('New Folder');

//rename file...................
// fs.renameSync("fsModule.js","fsModuleSync.js");

//read data without buffering............
// const data = fs.readFileSync('file.txt', 'utf8');
// console.log(data);

//delete/remove file..............
// fs.unlinkSync('file.txt');

//delete/remove folder............
// fs.rmdirSync("New Folder");

