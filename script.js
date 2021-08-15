var heading = document.querySelector("h1");
var attempt = document.querySelector("h3");
var num = document.querySelector("input");
var start = document.querySelector(".start");
var check = document.querySelector(".check");
var list = document.querySelector("ul");
var mainnumber; //undifined variable
var count = 0;
var attemptcount = 5;

start.addEventListener("click", function () {
  if (num.value == "") {
    heading.innerHTML = "Please enter a number";
  } else if (num.value > 9) {
    heading.innerHTML = "Please enter a number less than 9";
    num.value = "";
  } else {
    heading.innerHTML = "Guess the number";
    mainnumber = num.value;
    start.style.display = "none";
    check.style.display = "inline-block";
    num.value = "";
    num.setAttribute("type", "number");
    attempt.innerHTML = "Attempt = 5";
  }
});

check.addEventListener("click", function () {
  count++;
  attemptcount--;
  if (mainnumber == num.value) {
    //mainnumber is first num.value variable
    heading.innerHTML = "Congratulations!";
    num.style.display = "none";
    check.style.display = "none";
    list.innerHTML = "";
  } else {
    attempt.innerHTML = "Attempt = " + attemptcount;
    list.innerHTML += "<li>" + num.value + "</li>";
    num.value = "";
  }

  if (count == 5) {
    heading.innerHTML = "Game over";
    num.style.display = "none";
    check.style.display = "none";
    list.innerHTML = "";
  }
});
