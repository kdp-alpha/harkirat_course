// we will get familiar with some string functions here 

//get length
function getLength(str) {
    console.log("Length:", str.length);
}

getLength("Hello World");

//first index of
function findIndexOf(str, target) {
    console.log("Index", str.indexOf(target));
}

findIndexOf("Hello Worlds", "World");

//lastindexof
function findLastIndexOf(str, target) {
    console.log("Index", str.lastIndexOf(target));
}

findLastIndexOf("Hello World World", "World");

//slice 
function getSlice(str, st, en) {
    console.log("Sliced word:", str.slice(st, en));
}

getSlice("Hello World", 1, 3);

// substring
function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
    console.log("Original String:", str);
    console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

// trim
function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
}
trimString(" Hello World ");


