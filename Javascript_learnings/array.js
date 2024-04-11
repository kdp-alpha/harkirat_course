// push()
function pushExample(arr, element) {
    console.log("Original Array:", arr);

    arr.push(element);
    console.log("After push:", arr);
}
pushExample([1, 2, 3], 4)

// pop()
function popExample(arr) {
    console.log("Original Array:", arr);

    arr.pop();
    console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift()
function shiftExample(arr) {
    console.log("Original Array:", arr);

    arr.shift();
    console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);



//for each
function forEachEg(arr){
    arr.forEach((item,idx) => {
        console.log(item,idx)

    })
}

forEachEg([1,2,3,4])


//map example
function mapEg(arr){
    arr.map((item,idx) => {
        console.log(item,idx);
    })
}

mapEg([1,2,3,4])