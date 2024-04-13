// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// hello     world    my    name   is       raman
// After the program runs, the output should be

// hello world my name is raman

const fs = require('fs');

function removeSpaces(str){
    let prev = '';

    let result =''
    for(let i=0;i<str.length;i++){
        let curr = str[i];
        
        if(curr!==' ' || prev!==' '){
            result += curr
        }

        prev = curr
    }

    return result
}


fs.readFile('fileCleaner.txt','utf-8',(err,data) => {
    let temp = removeSpaces(data)
    fs.writeFile('fileCleaner.txt',temp,(err) => {
        if(err){
            console.log("File not able to create");
        }
        else{
            console.log("File is successfully created");
        }
    })
})
