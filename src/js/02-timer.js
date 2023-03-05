// Описаний в документації
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector("button[data-start]");
const textDays = document.querySelector("span[data-days]");
const textHours = document.querySelector("span[data-hours]");
const textMinutes = document.querySelector("span[data-minutes]");
const textSeconds = document.querySelector("span[data-seconds]");

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
      if (selectedDate < new Date()) {
        console.log(selectedDates[0]);
          //   window.alert("Please choose a date in the future");
          Notiflix.Notify.warning('Please choose a date in the future');
        return;
    }
      startBtn.disabled = false;
      console.log(startBtn.disabled);
  },
};

const returnTimer = flatpickr("#datetime-picker", options);

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


startBtn.addEventListener("click", () => {
    const selectedDate = returnTimer.selectedDates[0];
      startBtn.disabled = true;
    const countdown = setInterval(() => {
        const currentData = new Date();
        const difference = selectedDate - currentData;
        if (difference <= 0) {
            clearInterval(countdown);
            return;
        }
        let result = convertMs(difference);
        textDays.textContent = addLeadingZero(result.days);
        textHours.textContent = addLeadingZero(result.hours);
        textMinutes.textContent = addLeadingZero(result.minutes);
        textSeconds.textContent = addLeadingZero(result.seconds);
     }, 1000);
});

function addLeadingZero(value) {
    let valueStr = value.toString();
    if (valueStr.length < 2) {
        return valueStr.padStart(2, '0');
    }
    return valueStr;
 }

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}