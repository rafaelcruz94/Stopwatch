'user strict';

let s, m, h, ms;
ms = s = m = h = 0;

let displaySeconds, displayMinutes, displayHours, displayMilliseconds;
displaySeconds = displayMinutes = displayHours = displayMilliseconds = 0;

let interval = 0;
let status = "stopped";

function stopWatch() {
    ms++;
    //Logic to determine when to increment next value
    if (ms / 100 === 1) { //1000 ms = 1 sec
        ms = 0;
        s++;

        if (s / 60 === 1) {
            s = 0;
            m++;

            if (m / 60 === 1) {
                m = 0;
                h++;
            }
        }
    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    displayMilliseconds = (ms < 10) ? ("0" + ms) : ms;
    displaySeconds = (s < 10) ? ("0" + s) : s;
    displayMinutes = (m < 10) ? ("0" + m) : m;
    displayHours = (h < 10) ? ("0" + h) : h;

    //Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" + displayMilliseconds;
}

function startStop() {
    if (status === "stopped") {
        //Start the stopwatch
        interval = window.setInterval(stopWatch, 10);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    }
    else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
}

//Function to reset the stopwatch
function reset() {
    clearInterval(interval);
    ms = s = m = h = 0;
    document.getElementById("display").innerHTML = "00:00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
    document.getElementById('lapText').innerHTML = "";
    status = "stopped";
}

//Function to display laps
function lap() {
    document.getElementById('lapText').innerHTML += `<p>${displayHours}:${displayMinutes}:${displaySeconds}:${displayMilliseconds}</p>`;
}

//EventListeners
window.addEventListener('load', () => {
    document.getElementById('lap').addEventListener('click', lap);
    document.getElementById('startStop').addEventListener('click', startStop);
    document.getElementById('reset').addEventListener('click', reset);
});