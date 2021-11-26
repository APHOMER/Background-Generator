<<<<<<< HEAD
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.Value
    + ", "
    + color2.Value
    + ")";

    css.textContent = body.stylebackground + ";";
}

color1.addEventListener("input", setGradient);

=======
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.Value
    + ", "
    + color2.Value
    + ")";

    css.textContent = body.stylebackground + ";";
}

color1.addEventListener("input", setGradient);

>>>>>>> 80f974673445010e85bc4818ff8aa7ed42a21e38
color2.addEventListener("input", setGradient);