import flatpickr from 'flatpickr';
import iziToast from "izitoast";

let userSelectedDate = null;
let timerIntervalId = null;
const startButton = document.querySelector('button[data-start]');
const dateTimePickerInput = document.querySelector('#datetime-picker');

function isDateValid(targetDate) {
  const currentDateUnix = Date.now();
  const targetDateUnix = Date.parse(targetDate);

  return currentDateUnix < targetDateUnix;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(time) {
    return String(time).padStart(2, '0');
}

function startCountdown(targetDate) {
    timerIntervalId = setInterval(() => {
        const remainingTimeUnix = Date.parse(targetDate) - Date.now();
        const daysSpan = document.querySelector('span[data-days]');
        const hoursSpan = document.querySelector('span[data-hours]');
        const minutesSpan = document.querySelector('span[data-minutes]');
        const secondsSpan = document.querySelector('span[data-seconds]');

        if (remainingTimeUnix <= 0) {
            clearInterval(timerIntervalId);
            daysSpan.textContent = '00';
            hoursSpan.textContent = '00';
            minutesSpan.textContent = '00';
            secondsSpan.textContent = '00';
            dateTimePickerInput.disabled = false;

            return;
        }

        const { days, hours, minutes, seconds } = convertMs(remainingTimeUnix);
        daysSpan.textContent = addLeadingZero(days);
        hoursSpan.textContent = addLeadingZero(hours);
        minutesSpan.textContent = addLeadingZero(minutes);
        secondsSpan.textContent = addLeadingZero(seconds);
    }, 1000);
}

startButton.addEventListener('click', event => {
    event.target.disabled = true;
    dateTimePickerInput.disabled = true;
    startCountdown(userSelectedDate);
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (!isDateValid(userSelectedDate)) {
      startButton.disabled = true;
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topCenter',
      });

      return;
    }

    startButton.disabled = false;
  },
};

flatpickr('#datetime-picker', options);
