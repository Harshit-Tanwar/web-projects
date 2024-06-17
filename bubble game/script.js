var timer = 60;
var hit = 0;
var score = 0;

function newScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function newHit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hit;
}

function setTimer() {
  var timerval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#setTime").textContent = timer;
    } else {
      clearTimeout(timerval);
      document.querySelector("#panelbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function bubble() {
  var clutter = "";
  for (var i = 0; i < 90; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="circle">${rn}</div>`;
  }
  document.querySelector("#panelbtm").innerHTML = clutter;
}

document
  .querySelector("#panelbtm")
  .addEventListener("click", function (details) {
    var a = Number(details.target.textContent);
    if (a === hit) {
      newScore();
      newHit();
      bubble();
    }
  });

newHit();
setTimer();
bubble();
