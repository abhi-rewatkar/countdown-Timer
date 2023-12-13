let countdown;
let runningTime = false;

function startTimer(duration) {
  let timer = duration * 60;
  countdown = setInterval(function() {
    if (runningTime) {
      let hours = Math.floor(timer / 3600);
      let minutes = Math.floor((timer % 3600) / 60);
      let seconds = timer % 60;

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      document.getElementById("time").textContent = hours + ":" + minutes + ":" + seconds;

      if (--timer < 0) {
        clearInterval(countdown);
        runningTime = false;
      }
    }
  }, 1000);
}



document.getElementById("start").addEventListener("click", function() {
  const minutes = parseInt(document.getElementById("minutes").value);
  if (!runningTime && !isNaN(minutes)) {
    startTimer(minutes);  
    runningTime = true;
  }
}); 

document.getElementById("reset").addEventListener("click", function() {
  clearInterval(countdown);
  document.getElementById("time").textContent = "00:00:00";
  runningTime = false;
});

document.getElementById("pause").addEventListener("click", function() {
  runningTime = false;
});

