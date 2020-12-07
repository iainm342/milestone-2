// Countdown timer script - W3 Schools

//sets the date we are counting down to
var countDownDate = new Date("Jan 31, 2021 00:00:00").getTime();

//updates the countdown every 1 second
var x = setInterval(function () {

  //Gets todays date and time
  var now = new Date().getTime();

  //Works out the distance between now and count down date
  var distance = countDownDate - now;

  //time calcs for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //displays result in the element with id="demo"
  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  //if the countdown is finished display text in element
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
