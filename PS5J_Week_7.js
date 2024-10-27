var pic;

function preload(){
  pic = loadImage("data/IMG_6412Small.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("blue");
  imageMode(CENTER, CENTER);
}


function draw() {
  image (pic, width/2, height/2);
  image(pic, mouseX, mouseY, 30, 30);
}
