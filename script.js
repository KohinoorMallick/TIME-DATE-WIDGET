function updateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    const timeString = now.toLocaleTimeString();

    dateElement.textContent = dateString;
    timeElement.textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();  // Initial call to display the time immediately
