var fixedRec, movingRec;

function setup() {
  createCanvas(1200,800);
  fixedRec = createSprite(200,200,50,80);
  fixedRec.shapeColor = "green";
  movingRec = createSprite(400,200,30,50);
  movingRec.shapeColor = "green"; 
}

function draw() {
  background(0,0,0);  
  movingRec.x = World.mouseX
  movingRec.y = World.mouseY

  if(movingRec.x - fixedRec.x < movingRec.width/2 +  fixedRec.width/2
    && fixedRec.x - movingRec.x < movingRec.width/2 +  fixedRec.width/2
    && movingRec.y - fixedRec.y < movingRec.height/2 + fixedRec.height/2
    && fixedRec.y - movingRec.y < movingRec.height/2 + fixedRec.height/2
    ){
      fixedRec.shapeColor = "red";
      movingRec.shapeColor = "red";
  }
  else{
    fixedRec.shapeColor = "green";
    movingRec.shapeColor = "green";
  }
  drawSprites();
}