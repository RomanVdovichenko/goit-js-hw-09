import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    inputDateEnd: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    daysEnd: document.querySelector('span[data-days]'),
    hoursEnd: document.querySelector('span[data-hours]'),
    minutesEnd: document.querySelector('span[data-minutes]'),
    secondsEnd: document.querySelector('span[data-seconds]'),
};

const {
    inputDateEnd,
    startBtn,
    daysEnd,
    hoursEnd,
    minutesEnd,
    secondsEnd    
} = refs;

let timer = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() > options.defaultDate.getTime()) {
            startBtn.removeAttribute('disabled');
            timer = selectedDates[0].getTime() - options.defaultDate.getTime();
      }else {Notiflix.Notify.failure("Please choose a date in the future");}       
  },
};

startBtn.setAttribute('disabled', 'disabled');

flatpickr(inputDateEnd, options);

startBtn.addEventListener('click', timerStart);

function timerStart() {
    updateTimer();
    inputDateEnd.setAttribute('disabled', 'disabled');
    startBtn.setAttribute('disabled', 'disabled');
        id = setInterval(() => {
            if (timer >= 1000) {
                timer -= 1000;
                updateTimer();
            } else {
                clearInterval(id);
                Notiflix.Notify.success("Time is up!");
            }                
    },1000)
}

function updateTimer() {
    return (
        daysEnd.textContent = addLeadingZero(convertMs(timer).days, 3),
        hoursEnd.textContent = addLeadingZero(convertMs(timer).hours, 2),
        minutesEnd.textContent = addLeadingZero(convertMs(timer).minutes, 2),
        secondsEnd.textContent = addLeadingZero(convertMs(timer).seconds, 2))
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function addLeadingZero(value, n) {
    return value.toString().padStart(n, '0')
}
