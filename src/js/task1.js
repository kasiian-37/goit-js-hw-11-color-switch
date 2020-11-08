const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector("body");

startBtn.addEventListener("click", onColorSwitch);
let switcherTimerId = null;

function onColorSwitch() {
  if (!startBtn.disabled) {
    switcherTimerId = setInterval(() => {
      console.log(bodyRef.style.backgroundColor);
      bodyRef.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
}

stopBtn.addEventListener("click", onStopColorSwitch);

function onStopColorSwitch() {
  if (!stopBtn.disabled) {
    clearInterval(switcherTimerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
}
