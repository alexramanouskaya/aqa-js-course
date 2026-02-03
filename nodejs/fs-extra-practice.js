const fs = require('fs-extra');

function createFirstFolder(){
const folderPath = './nodejs/folder1';
fs.ensureDirSync(folderPath)
}

function createFistTextFile(){
const file = './nodejs/folder1/textfile.txt';
fs.outputFileSync(file, 'God help me')   
}

function createSecondFolder(){
const folder2Path = './nodejs/folder2'
fs.ensureDirSync(folder2Path)
}

function moveTextFile (){
const file1Path = './nodejs/folder1/textfile.txt';
const file2Path = './nodejs/folder2/textfile.txt';
fs.moveSync(file1Path, file2Path)
}

function createThirdFolder(){
const folderPath = './nodejs/folder3';
fs.ensureDirSync(folderPath)
}

function copyFile(){
const file2Path = './nodejs/folder2/textfile.txt';
const file3Path = './nodejs/folder3/copyfile.txt';
fs.copySync(file2Path, file3Path);
}

function deleteFiles(){
const remove1stFile = './nodejs/folder2/textfile.txt';
const remove2ndFile = './nodejs/folder3/copyfile.txt';
fs.removeSync(remove1stFile);
fs.removeSync(remove2ndFile);
}

function deleteFolders(){
const remove1stFolder = './nodejs/folder1';
const remove2ndFolder = './nodejs/folder2';
const remove3rdFolder = './nodejs/folder3';
fs.removeSync(remove1stFolder);
fs.removeSync(remove2ndFolder);
fs.removeSync(remove3rdFolder);
}

createFirstFolder()
createFistTextFile()
createSecondFolder()
moveTextFile()
createThirdFolder()
copyFile()
// deleteFiles()
// deleteFolders()