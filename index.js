
var randomnumber1 = Math.floor((Math.random()*6)) +1;
var randomdiceimage = "images/dice" +randomnumber1 +".png"



// document.querySelectorAllAll("img")[0].setAttribute("src", randomdiceimage)

// var randomdiceimage2 = "images/dice" +randomnumber2 +".png"
// document.querySelectorAllAll("img")[0].setAttribute("src", randomdiceimage2)
if ((randomnumber1===1)||(randomnumber1===2)||(randomnumber1===3)||(randomnumber1===4)||(randomnumber1===5) ||(randomnumber1===6)){
   document.querySelectorAll("img")[0].setAttribute("src", randomdiceimage)}


var randomnumber2 = Math.floor((Math.random()*6)) +1;
var randomdiceimage2 = "images/dice" +randomnumber2 +".png"
if ((randomnumber2===1)||(randomnumber2===2)||(randomnumber2===3)||(randomnumber2===4)||(randomnumber2===5) ||(randomnumber2===6)){
      document.querySelectorAll("img")[1].setAttribute("src", randomdiceimage2)
    }

    if (randomnumber1 > randomnumber2){
      document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
    }
    else if (randomnumber1 < randomnumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 2 wins";
    }else{
      document.querySelector("h1").innerHTML = "😶 Its a draw";
    }

//
// if (randomnumber2==1){ document.querySelectorAll("right").setAttribute("src", "images/dice1.png");}
//
// if (randomnumber2==2){ document.querySelectorAll("right").setAttribute("src", "images/dice2.png");}
//
// if (randomnumber2==3){document.querySelectorAll("right").setAttribute("src", "images/dice3.png");}
//
// if (randomnumber2==4){ document.querySelectorAll("right").setAttribute("src", "images/dice4.png");}
//
// if (randomnumber2==5){document.querySelectorAll("right").setAttribute("src", "images/dice5.png");}
//
// if (randomnumber2==6){document.querySelectorAll("right").setAttribute("src", "images/dice6.png");}
