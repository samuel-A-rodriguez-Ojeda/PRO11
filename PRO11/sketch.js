var sea, ship, invisibleGround, sea
 



function preload(){
  floatingShip = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  TheSea = loadImage("sea.png");

}

function setup(){
  createCanvas(1200,600);

  sea = createSprite(600,300,1200,200);
  sea.addImage("movingSea",TheSea);
  sea.scale = 0.4;
  
  ship = createSprite(1000,350,30,30);
  ship.addAnimation("floating",floatingShip);
  ship.scale = 0.2;


 
}

function draw() {
  background("lightGray");
 

  drawSprites();
}