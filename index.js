var numberofbuttons = document.querySelectorAll(".drum").length;


var audio1 = new Audio('sounds/tom-1.mp3');
var audio2 = new Audio('sounds/tom-2.mp3');
var audio3 = new Audio('sounds/tom-3.mp3');
var audio4 = new Audio('sounds/tom-4.mp3');
var audio6 = new Audio('sounds/crash.mp3');
var audio7 = new Audio('sounds/kick-bass.mp3');
var audio5 = new Audio('sounds/snare.mp3');


for (var i = 0; i<numberofbuttons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
makesound(this.innerHTML);
buttonAnimation(this.innerHTML);
});
}



document.addEventListener("keydown", function(event) {
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key){
  switch(key) {
    case "w":
      audio1.play();
      break;

    case "a":
      audio2.play();
      break;

    case "s":
    audio3.play();
    break;

    case "d":
    audio4.play();
    break;

    case "j":
    audio5.play();
    break;

    case "k":
    audio6.play();
    break;

    case "l":
    audio7.play();
    break;

    default: console.log(this.innerHTML);
  }
}

function buttonAnimation(currentkey){
var activeButton = document.querySelector("."+currentkey);
activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");

}, 100);
}
