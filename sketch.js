var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor = "red";
  gameobject2 = createSprite(200,100,50,50);
gameobject2.shapeColor = "blue";  
gameobject3 = createSprite(300,100,50,50);
 gameobject3.shapeColor = "green";
 gameobject4 = createSprite(400,100,50,50);
 gameobject4.shapeColor = "purple";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,gameobject1)){
   movingRect.shapeColor = "pink";
   gameobject1.shapeColor = "pink";

 }
 else{
   movingRect.shapeColor = "orange";
   gameobject1.shapeColor = "orange";
 }

  drawSprites();
}