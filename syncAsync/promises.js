const fs = require('fs');

function reading(){
    return new Promise(function(resolve,reject) {
        fs.readFile("a.txt","utf-8",function(err,data) {
            if(err){
                reject("Error")
            }
            else{
                resolve(data);
            }
        })
    })
}


reading().then((data) => {
    console.log(data)
})