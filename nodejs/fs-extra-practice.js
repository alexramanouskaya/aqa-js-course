const fs = require('fs-extra');

function createFirstFolder(){
const folderPath = 'C:/Users/acer/aqa-js-course/nodejs/folder1';
fs.ensureDirSync(folderPath)
}

function createFistTextFile(){
const file = 'C:/Users/acer/aqa-js-course/nodejs/folder1/textfile.txt';
fs.outputFileSync(file, 'God help me')   
}

function createSecondFolder(){
const folder2Path = 'C:/Users/acer/aqa-js-course/nodejs/folder2'
fs.ensureDirSync(folder2Path)
}

function moveTextFile (){
const file1Path = 'C:/Users/acer/aqa-js-course/nodejs/folder1/textfile.txt';
const file2Path = 'C:/Users/acer/aqa-js-course/nodejs/folder2/textfile.txt';
fs.moveSync(file1Path, file2Path)
}

function createThirdFolder(){
const folderPath = 'C:/Users/acer/aqa-js-course/nodejs/folder3';
fs.ensureDirSync(folderPath)
}

function copyFile(){
const file2Path = 'C:/Users/acer/aqa-js-course/nodejs/folder2/textfile.txt';
const file3Path = 'C:/Users/acer/aqa-js-course/nodejs/folder3/copyfile.txt';
fs.copySync(file2Path, file3Path);
}

// function deleteFiles(){
// const remove1stFile = 'C:/Users/acer/aqa-js-course/nodejs/folder2/textfile.txt';
// const remove2ndFile = 'C:/Users/acer/aqa-js-course/nodejs/folder3/copyfile.txt';
// fs.removeSync(remove1stFile);
// fs.removeSync(remove2ndFile);
// }

// function deleteFolders(){
// const remove1stFolder = 'C:/Users/acer/aqa-js-course/nodejs/folder1';
// const remove2ndFolder = 'C:/Users/acer/aqa-js-course/nodejs/folder2';
// const remove3rdFolder = 'C:/Users/acer/aqa-js-course/nodejs/folder3';
// fs.removeSync(remove1stFolder);
// fs.removeSync(remove2ndFolder);
// fs.removeSync(remove3rdFolder);
// }

createFirstFolder()
createFistTextFile()
createSecondFolder()
moveTextFile()
createThirdFolder()
copyFile()
// deleteFiles()
// deleteFolders()