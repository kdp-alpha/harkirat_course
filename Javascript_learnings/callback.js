function sum(num1, num2,fncall){
    let res = num1 + num2
    fncall(res)
}

function displayRes(data){
    console.log("Result of the sum is: " + data)
}

function displayResultPassive(data) {
    console.log("Sum's result is: " + data)
}

sum(1,2,displayRes)
