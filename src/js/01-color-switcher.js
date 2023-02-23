const startBtn = document.querySelector('button[data-start]');
const stoptBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

stoptBtn.setAttribute('disabled', 'disabled');
startBtn.addEventListener('click', onStart);
stoptBtn.addEventListener('click', onStop);

function onStart() {
    startBtn.setAttribute('disabled', 'disabled');
    stoptBtn.removeAttribute('disabled');
    id = setInterval(() => {   
        body.style.backgroundColor = getRandomHexColor();
    }, 1000)
}

function onStop() {
    clearInterval(id);
    stoptBtn.setAttribute('disabled', 'disabled');
    startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}