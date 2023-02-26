const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

stopBtn.setAttribute('disabled', '');
startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

function onStart() {
    startBtn.setAttribute('disabled', '');
    stopBtn.removeAttribute('disabled');
    timerId = setInterval(() => {   
        body.style.backgroundColor = getRandomHexColor();
    }, 1000)
}

function onStop() {
    clearInterval(timerId);
    stopBtn.setAttribute('disabled', '');
    startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}