const fs = require('fs');

const data = "Hello World"

fs.writeFile('b.txt',data,(err) => {
    if(err){
        console.log("Got error");
    }
    else{
        console.log("File have written successfully");
    }
})