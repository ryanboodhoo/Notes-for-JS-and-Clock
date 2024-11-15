function clock() {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const today = new Date();

    // Update the date
    document.getElementById('Date').innerHTML = 
        dayNames[today.getDay()] + " " + 
        today.getDate() + " " + 
        monthNames[today.getMonth()] + " " +
        today.getFullYear();

    // Get time components
    let h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();

    // Determine AM or PM
    const ampm = h >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    h = h % 12;
    h = h === 0 ? 12 : h; // Handle midnight (0 hours) as 12

    // Add leading zeros to minutes and seconds
    const formattedHours = h < 10 ? "0" + h : h;
    const formattedMinutes = m < 10 ? "0" + m : m;
    const formattedSeconds = s < 10 ? "0" + s : s;

    // Update the clock
    document.getElementById('hours').innerHTML = formattedHours;
    document.getElementById('min').innerHTML = formattedMinutes;
    document.getElementById('sec').innerHTML = formattedSeconds;

    // Display AM or PM
    const ampmElement = document.getElementById('ampm');
    if (ampmElement) {
        ampmElement.innerHTML = ampm;
    } else {
        const li = document.createElement('li');
        li.id = 'ampm';
        li.innerHTML = ampm;
        document.querySelector('.clock ul').appendChild(li);
    }
}

// Run the clock function every 400 milliseconds
setInterval(clock, 400);
