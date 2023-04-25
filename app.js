const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minEl = document.getElementById("mins");
const secEl = document.getElementById("seconds")
const btn = document.querySelector(".check")

const selectEl = document.getElementById('select')


btn.addEventListener('click', () => {
    const selectedDate = new Date(selectEl.value);
    const currentDate = new Date();
    const totalSeconds = (selectedDate - currentDate) / 1000


    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds /3600 ) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    dayEl.innerHTML = days;
    hourEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(minutes);
    secEl.innerHTML = formatTime(seconds);

})


function formatTime(time) {
    return time  < 10 ? (`0${time}`) : time
}

