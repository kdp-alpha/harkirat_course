/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, n); // Pass resolve as a function reference, not invoking it immediately
    });
}

let promise = wait(5000);

promise.then(() => {
    console.log("I am done with 5 seconds");
});
