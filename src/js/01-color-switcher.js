const body = document.querySelector('body');
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let interval;

const onstartBtn = () => {
    startBtn.disabled = true;
  interval = setInterval(() => {
       const bgColor = getRandomHexColor();
    body.style.backgroundColor = bgColor;;
  }, 1000);
  
};

startBtn.addEventListener('click', onstartBtn);

stopBtn.addEventListener("click", () => {
     startBtn.disabled = false;
  clearInterval(interval);
 });






// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });


// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });
