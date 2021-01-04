var house;
var background1;
var houseimg;


function preload(){
background1=loadImage("images/farm_land.png");
houseimg=loadImage("images/house.jpeg");



}
function setup() {
  createCanvas(windowWidth,windowHeight);
  house=createSprite(windowWidth-1000,windowHeight-300);
  house.addImage(houseimg);
  
}

function draw() {
  background(background1);  
  drawSprites();
  strokeWeight(5);
  line(700,450,420,700)
}