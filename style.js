var randomNum = Math.floor(Math.random()*6)+1;
var imgName = "./images/dice" + randomNum + ".png";
var image = document.querySelectorAll("img")[0];
image.setAttribute("src",imgName);

var randomNum2 = Math.floor(Math.random()*6)+1;
var imgName2 = "./images/dice" + randomNum2 + ".png";
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",imgName2);

if(randomNum>randomNum2){
    document.querySelector("h1").innerHTML="Person 1 wins"
}else if(randomNum<randomNum2){
    document.querySelector("h1").innerHTML="Person 2 wins"
}else{
    document.querySelector("h1").innerHTML="Draw"
}