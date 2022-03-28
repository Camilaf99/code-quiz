
var count = 75;

var quizFinished = false;

var timer = setInterval(function() {
  if(count === 0 || quizFinished) {
    stopInterval()
  } else {
    count--;
  }
}, 1000);

var stopInterval = function() {
  clearInterval(timer);
}