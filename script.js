document.write("Assignment No. 5: Console-Based Digital Clock in 12-Hour Format");
        document.write("</br>");

        // Develop a console-based digital clock in 12-hour format using JavaScript. Continuously display the current time in the format hh:mm:ss AM/PM in the console. Handle different cases and ensure continuous updating.
        document.write("Check in Console");
        
        function updateClock() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // The ternary operator is a shorthand way of writing an if-else statement. In this case, it's assigning the value of ampm based on whether the condition hours >= 12 is true or false.

    /*  1. hours >= 12 is the condition being checked. If the current value of hours is greater than or equal to 12, the condition is true.
        2. ? is the ternary operator.
        3. ? 'PM' : 'AM'; is the ternary operator. If the condition is true, it returns the value before the : (which is   'PM'), and if the condition is false, it returns the value after the : (which is 'AM').
    So, if hours is greater than or equal to 12, ampm is assigned the value 'PM'; otherwise, it's assigned the  value 'AM'.*/

    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    // If hours is 0, set it to 12
    if (!hours) {
    hours = 12;
}  

    // Add leading zeros to minutes and seconds if needed

    /* minutes < 10 is the condition being checked. If the value of minutes is less than 10, the condition is true.
    ? '0' + minutes : minutes; If the condition is true, it returns the value before the : (which is '0' + minutes), and if the condition is false, it returns the value after the : (which is minutes).
    

For example:

If minutes is 5, this line sets minutes to '05'.
If minutes is 15, this line keeps minutes as 15. */


    minutes = minutes < 10 ? '0' + minutes : minutes;

    /* seconds < 10 is the condition being checked. If the value of seconds is less than 10, the condition is true.
    ? '0' + seconds : seconds is the ternary operator. If the condition is true, it returns the value before the : (which is '0' + seconds), and if the condition is false, it returns the value after the : (which is seconds).

For example:

If seconds is 5, this line sets seconds to '05'.
If seconds is 15, this line keeps seconds as 15. */


    seconds = seconds < 10 ? '0' + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    console.clear();
    console.log(time);
}

// Update the clock every second
setInterval(updateClock, 1000);

 updateClock();