
const fs = require("fs")

const allLines = require("./commands/noToLines")
const nonEmptyLines = require("./commands/noToNonEmptyLines")
const remove = require("./commands/removeExtraLines")

// input
let inputArr = process.argv.slice(2)

//console.log( inputArr );

let commandArr = [];
let fileArr = [];

for (let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i].charAt(0);

    if (firstChar == '-') {
        commandArr.push(inputArr[i])
    }else
        fileArr.push(inputArr[i])
}

// read

let content = ""
for (let i = 0; i < fileArr.length; i++) {

    let fileExists = fs.existsSync(fileArr[i])

    if (fileExists) {
        
        let bufferContent = fs.readFileSync(fileArr[i])
        content += bufferContent +  "\r\n";
    }else{
        console.log(`${fileArr[i]} does not exists`);
        return;
    }
}

// content = content.split('\r\n')
// console.log(content);

if (commandArr.includes("-n")  && commandArr.includes("-b")) {
    console.log("cant use -n and -b together");
    return;
}

for (let i = 0; i < commandArr.length; i++) {
    let com = commandArr[i];
    
    if (com == '-s') {
        content = remove.removeAll(content)
    }else if (com == '-n') {
        content = allLines.all(content)
    } else if( com == '-b'){
        content = nonEmptyLines.nonEmpty(content)
    }else{
       // console.log('Wrong input');
    }

}
console.log(content);




