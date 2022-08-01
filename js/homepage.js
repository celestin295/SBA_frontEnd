// you can have multiple callback using the eventlistener this way
const body = document.querySelector("body");
const darkmode = document.querySelector("#darkmode");
const lightmode = document.querySelector("#lightmode");
function setDarkMode() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
}
function setLightMode() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
}
darkmode.addEventListener("click", setDarkMode);
lightmode.addEventListener("click", setLightMode);



// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}

