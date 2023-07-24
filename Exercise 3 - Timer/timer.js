console.log("Exercise 3 - Timer");
const myTimer = document.querySelector("#myTimer");
var count = 0;
myTimer.addEventListener("click", function (e) {
  const minus = document.querySelector("#minus");
  const plus = document.querySelector("#plus");
  const reset = document.querySelector("#reset");
  const start = document.querySelector("#start");
  const stop = document.querySelector("#stop");
  const timerField = document.querySelector("#timerField");
  var intervalId;

  if (e.target == plus) {
    count = count + 1;
    timerField.innerHTML = count;
  } else if (e.target == minus) {
    count -= 1;
    timerField.innerHTML = count;
  } else if (e.target == reset) {
    count = 0;
    timerField.innerHTML = count;
  }
});
start.addEventListener("click", function (e) {
  e.target.classList.add("hide");
  document.querySelector("#stop").classList.remove("hide");

  intervalId = setInterval(() => {
    timerField.innerHTML = count;
    count--;
    if (count == -1) {
      clearInterval(intervalId);
      intervalId = null;
      document.querySelector("#stop").classList.add("hide");
      e.target.classList.remove("hide");
    }
  }, 1000);
});
