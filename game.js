// Iteration 2: Generate 2 random number and display it on the screen
let XTime = undefined;
let num_1 = document.getElementById("number1");
let num_2 = document.getElementById("number2");
let TimerDiv = document.getElementById("timer");
ResetTime();
let score = 0;
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
num_1.innerText = num1;
num_2.innerText = num2;
// Iteration 3: Make the options button functional
let greaterThanBtn = document.getElementById('greater-than');
greaterThanBtn.addEventListener('click', function () {
  if (num1 > num2) {
    score = score + 1;
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    num_1.innerText = num1;
    num_2.innerText = num2;
    clearInterval(XTime);
    ResetTime();
    console.log('Correct Answer');
  } else {
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
    console.log('Wrong Answer');
  }
});
// Iteration 4: Build a timer for the game
let equalTo = document.getElementById('equal-to');
equalTo.addEventListener('click', function () {
  if (num1 == num2) {
    score = score + 1;
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    num_1.innerText = num1;
    num_2.innerText = num2;
    clearInterval(XTime);
    ResetTime();
    console.log('Correct');
  } else {
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
    console.log('Wrong Answer');
  }
});

let smallerThan = document.getElementById('lesser-than');
smallerThan.addEventListener('click', function () {
  if (num1 < num2) {
    score = score + 1;
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    num_1.innerText = num1;
    num_2.innerText = num2;
    clearInterval(XTime);
    ResetTime();
    console.log('Correct Answer');
  } else {
    localStorage.setItem('score', score);
    window.location.href = './gameover.html';
    console.log('Wrong Answer');
  }
});

function ResetTime() {
  let Time = 10;
  TimerDiv.innerText = Time;
  XTime = setInterval(() => {
    Time = Time - 1;
    TimerDiv.innerText = Time;
    if (Time == 0) {
      localStorage.setItem('score', score);
      window.location.href = './gameover.html';
    }
  }, 1000);
}