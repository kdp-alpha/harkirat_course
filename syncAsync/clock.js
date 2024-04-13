// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)


function counter() {
  let date = new Date();
  console.log(date)
  setTimeout(counter, 1000); // Call counter() again after 1000 milliseconds (1 second)
}

// Start the counter
counter();
