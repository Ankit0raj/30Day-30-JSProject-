// const hour = document.getElementById('hour');
// const minute = document.getElementById('minute');
// const second = document.getElementById('second');

// const start = document.getElementById('start');
// const reset = document.getElementById('reset');

// const disp = document.getElementById('disp');

// const audio = document.getElementById('audio'); // Added audio element

// var interval = null;
// var total = 0;

// totalValue = () => {
//     total = Number(hour.value) * 3600 + Number(minute.value) * 60 + Number(second.value);
// }

// Timer = () => {
//     totalValue();
//     total--;

//     if (total >= 0) {
//         var hr = Math.floor(total / 3600);
//         var min = Math.floor((total / 60) - (hr * 60));
//         var sec = total - ((hr * 3600) + (min * 60));

//         var formattedHr = hr < 10 ? "0" + hr : hr;
//         var formattedMin = min < 10 ? "0" + min : min;
//         var formattedSec = sec < 10 ? "0" + (sec < 1 ? "0" : sec) : sec;

//         hour.value = formattedHr;
//         minute.value = formattedMin;
//         second.value = formattedSec;
//     } else {
//         clearInterval(interval);
//         disp.innerText = "Time Over";
        
//         // Play audio
//         audio.play();
//     }
// }


// resetTimer = () => {
//     clearInterval(interval);

//     hour.value = "HOUR";
//     minute.value = "MINUTE";
//     second.value = "SECOND";

//     disp.innerText = "Timer";
    
//     // Pause audio
//     audio.pause();
//     audio.currentTime = 0; // Reset audio playback to the beginning
// }

// start.addEventListener('click', () => {
//     clearInterval(interval);
//     interval = setInterval(Timer, 1000);

//     disp.innerText = "Timer Started";
// });

// reset.addEventListener('click', () => {
//     resetTimer();
// });

const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const start = document.getElementById('start');
const reset = document.getElementById('reset');

const disp = document.getElementById('disp');

const audio = document.getElementById('audio'); // Added audio element
audio.loop = true; // Enable audio looping

var interval = null;
var total = 0;

totalValue = () => {
    total = Number(hour.value) * 3600 + Number(minute.value) * 60 + Number(second.value);
}

Timer = () => {
    totalValue();
    total--;

    if (total >= 0) {
        var hr = Math.floor(total / 3600);
        var min = Math.floor((total / 60) - (hr * 60));
        var sec = total - ((hr * 3600) + (min * 60));

        var formattedHr = hr < 10 ? "0" + hr : hr;
        var formattedMin = min < 10 ? "0" + min : min;
        var formattedSec = sec < 10 ? "0" + (sec < 1 ? "0" : sec) : sec;

        hour.value = formattedHr;
        minute.value = formattedMin;
        second.value = formattedSec;
    } else {
        clearInterval(interval);
        disp.innerText = "Time Over";

        // Play audio
        audio.play();
    }
}

resetTimer = () => {
    clearInterval(interval);

    hour.value = "HOUR";
    minute.value = "MINUTE";
    second.value = "SECOND";

    disp.innerText = "Timer";

    // Pause audio and reset playback
    audio.pause();
    audio.currentTime = 0;
}

start.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(Timer, 1000);

    disp.innerText = "Timer Started";
});

reset.addEventListener('click', () => {
    resetTimer();
    audio.pause(); // Pause audio when resetting
});
