const fs = require('node:fs');
fs.appendFile('myNewFile.txt', 'Hello Append File', function (err) {
 if (err) throw err;
 console.log('saved!');
})

// open file 
fs.open('myNewFile2.txt', 'w', function (err) {
 if (err) throw err;
 console.log('Saved2');
})

// write file
// fs.writeFile('myNewFile3.txt', function (err) {
//  if (err) throw err;
//  console.log('Save3');
// })
//delete file
fs.unlink('myNewFile2.txt', function (err) {
 if (err) throw err;
 console.log("Update");
})

//rename file
fs.rename('myNewFile1.txt', function (err) {
 if (err) throw err;
 console.log('File rename');
})