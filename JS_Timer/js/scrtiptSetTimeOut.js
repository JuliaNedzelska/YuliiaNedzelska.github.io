var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    reset = document.getElementById('reset'),
    split = document.getElementById('split'),
    seconds = 0, minutes = 0, hours = 0;
var isRunning = false;


function updateCounter() {

    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00")
    + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
    + ":" + (seconds > 9 ? seconds : "0" + seconds);
}

function changeColorTimer() {
	h1.style.color =  "#749c0b";
}

function startTimer() {
	if (seconds >= 5) {
		changeColorTimer();
	}
	if (isRunning) {
		stopTimer();
		start.innerHTML = 'start';
		isRunning = false;
	} else {
		start.innerHTML = 'stop';
	    res = setInterval(updateCounter, 1000);
		isRunning = true;
	}
    return false;
}

function splitTimer() {
	if (isRunning) {
		var div = document.createElement('div');
		div.innerHTM = h1;
		document.body.appendChild(div);
	}
}

function resetTimer() {
	h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
    stopTimer();
}

function stopTimer() {
    	clearInterval(res)
    	h1.style.color =  "black";
	}

start.addEventListener("click", startTimer);
split.addEventListener("click", splitTimer);
reset.addEventListener("click", resetTimer);