var toggle = document.getElementById("container");
var body = document.querySelector("body");
var left = document.getElementsByName("left-area")


toggle.onclick = function(){
    toggle.classList.toggle("active");
    body.classList.toggle("active");
    left.classList.toggle("active")
}