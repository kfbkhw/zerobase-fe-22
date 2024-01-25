const MAX_TIME = 3600 * 24;

let intervalID;
let isTimerStart = false;

const timer = document.querySelector('.game-time');

const startTimer = (timer, timeOver) => {
    let time = 0;
    isTimerStart = true;
    intervalID = setInterval(() => {
        timer.innerHTML = getFormattedTime(++time);
        timer.dataset.time = time;
        if (time > MAX_TIME) {
            clearInterval(intervalID);
            isTimerStart = false;
            timeOver?.();
        }
    }, 1000);
}

const stopTimer = (gameOver) => {
    clearInterval(intervalID);
    isTimerStart = false;
    gameOver?.();
}

const getFormattedTime = (time) => {
    const sec = String(time % 60).padStart(2, '0');
    const min = String(Math.floor(time % 3600 / 60)).padStart(2, '0');
    const hr = String(Math.floor(time / 3600)).padStart(2, '0');

    return `${hr}:${min}:${sec}`
}

export { timer, startTimer, stopTimer, getFormattedTime, isTimerStart };