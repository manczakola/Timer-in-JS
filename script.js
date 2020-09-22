const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const btnPauza = document.querySelector('pauza');
const spanH = document.querySelector('.hours');
spanH.textContent = '00:'
const spanM = document.querySelector('.minutes');
spanM.textContent = '00:'
const spanS = document.querySelector('.seconds');
spanS.textContent = '00:'
const spanMS = document.querySelector('.miliseconds');
spanMS.textContent = '00'
let time = 10;

let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let startMiliseconds = () => {
    miliseconds++;
    spanMS.textContent = `${miliseconds}`;
    if (miliseconds == 99) {
        miliseconds = 0;

        startSeconds()
    }
    if (miliseconds < 10) {
        spanMS.textContent = `0${miliseconds}`
    }
}

let startSeconds = () => {
    seconds++;
    spanS.textContent = `${seconds}:`;
    if (seconds == 60) {
        seconds = 0;
        startMinutes();
    } else if (seconds < 10) {
        spanS.textContent = `0${seconds}:`
    }
}

let startMinutes = () => {
    minutes++;
    spanM.textContent = `${minutes}:`;
    if (minutes < 10) {
        spanM.textContent = `0${minutes}:`;
    };
    if (minutes == 60) {
        spanM.textContent = 0;

        startHours();
    }

}
let startHours = () => {
    hours++;
    spanH.textContent = `${minutes}:`;
    if (minutes < 10) {
        spanH.textContent = `0${hours}:`;
    };

}
let active = false;
let idI;
const timer = () => {
    if (!active) {
        active = !active;;
        btnStart.textContent = 'Pauza';
        idI = setInterval(startMiliseconds, time);
    } else {
        active = !active;
        btnStart.textContent = 'Start';
        clearInterval(idI);

    }
}


btnStart.addEventListener('click', timer)
btnReset.addEventListener('click', () => {
    console.log('reset')
    clearInterval(idI);
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    spanH.textContent = '00:'
    spanM.textContent = '00:'
    spanS.textContent = '00:'
    spanMS.textContent = '00'
})