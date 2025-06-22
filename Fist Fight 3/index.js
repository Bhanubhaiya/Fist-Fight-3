var randomimage = Math.floor(Math.random()*3) + 1 ;
var diceimage ;
if(randomimage === 1){
    diceimage = "rock" ; 
}
else if(randomimage === 2){
    diceimage = "paper" ;
}
else{
    diceimage = "scissor";
}
var photo = diceimage + ".png";

var image1 = document.querySelectorAll("img")[0] ;
image1.setAttribute("src" , photo );


var randomimage2 = Math.floor(Math.random()*3) + 1 ;
var diceimage2 ;
if(randomimage2 === 1){
    diceimage2 = "rock" ; 
}
else if(randomimage2 === 2){
    diceimage2 = "paper" ;
}
else{
    diceimage2 = "scissor";
}
var photo2 = diceimage2 + ".png";

var image2 = document.querySelectorAll("img")[1] ;
image2.setAttribute("src" , photo2 );

if(randomimage === 1 && randomimage2 == 2){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS !!!"
}

else if(randomimage === 1 && randomimage2 == 3){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS !!!"
}

else if(randomimage === 2 && randomimage2 == 3){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS !!!"
}

else if(randomimage === 2 && randomimage2 == 1){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS !!!"
}

else if(randomimage === 3 && randomimage2 == 2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS !!!"
}

else if(randomimage === 3 && randomimage2 == 1){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS !!!"
}
else{
    document.querySelector("h1").innerHTML="IT'S A DRAW !!!"
}