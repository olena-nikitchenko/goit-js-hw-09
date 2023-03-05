const body = document.querySelector('body');
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalShowColor = null;

const onstartBtn = () => {
    startBtn.disabled = true;
  intervalShowColor = setInterval(() => {
       const bgColor = getRandomHexColor();
    body.style.backgroundColor = bgColor;;
  }, 1000);
  
};

startBtn.addEventListener('click', onstartBtn);

stopBtn.addEventListener("click", () => {
     startBtn.disabled = false;
  clearInterval(intervalShowColor);
 });
