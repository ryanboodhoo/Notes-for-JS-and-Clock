function clock() {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const today = new Date();

     document.getElementById('Date').innerHTML = 
        dayNames[today.getDay()] + " " + 
        today.getDate() + " " + 
        monthNames[today.getMonth()] + " " +
        today.getFullYear();

     let h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();

     const ampm = h >= 12 ? "PM" : "AM";

     h = h % 12;
    h = h === 0 ? 12 : h;  
     const formattedHours = h < 10 ? "0" + h : h;
    const formattedMinutes = m < 10 ? "0" + m : m;
    const formattedSeconds = s < 10 ? "0" + s : s;

     document.getElementById('hours').innerHTML = formattedHours;
    document.getElementById('min').innerHTML = formattedMinutes;
    document.getElementById('sec').innerHTML = formattedSeconds;

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

 setInterval(clock, 400);
