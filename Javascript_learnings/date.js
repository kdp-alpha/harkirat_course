function dateMethods() {
    const currentDate = new Date();
    console.log("Current Date:", currentDate);

    console.log("currentDate:", currentDate.getDate());
    console.log("currentMonth", currentDate.getMonth());
    console.log("currentYear", currentDate.getFullYear());
    console.log("Hours:", currentDate.getHours());
    console.log("Minutes:", currentDate.getMinutes());
    console.log("Seconds:", currentDate.getSeconds());

}

// Example Usage for Date Methods
dateMethods();