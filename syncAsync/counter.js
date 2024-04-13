// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)


let count = 0;

function counter() {
  count++;
  console.log(count);
  setTimeout(counter, 1000); // Call counter() again after 1000 milliseconds (1 second)
}

// Start the counter
counter();
