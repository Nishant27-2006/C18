//Global Variables
var  monkey,monkey_01,monkey_02,monkey_03,monkey_04,monkey_05,monkey_06,monkey_07,monkey_08,monkey_09,monkey_10;
var banana,bananaImage;
var obstacle,obstacleImage;
var bananaGroup,obstacleGroup;
var jungle,jungleImage;
var ground,groundImage,invisibleground;
function preload(){
monkey_running=  
loadAnimation("monkey_01.png","monkey_02.png","monkey_03.png","monkey_04.png","monkey_05.png","monkey_06.png","monkey_07.png","monkey_08.png","monkey_09.png","monkey_10.png")
  
  bananaImage=loadImage("Banana.png");
  
  jungleImage=loadImage("jungle.jpg");
  
  groundImage=loadImage("ground.jpg");
  
  obstacleImage=loadImage("stone.png");
}


function setup() {
  createCanvas(600,200);
  
  monkey=createSprite(50,180,20,50);
  monkey.addAnimation(monkey_running,"monkey_01.png");
  monkey.scale=0.5;
  
  ground=createSprite(200,180,400,20);
  ground.addImage(groundImage);
  ground.x=ground.width/2;
  ground.velocityX=-6;
  
  invisibleground=createSprite(200,190,400,10);
  invisibleground.visible=false;
  
  jungle=createSprite(300,100,600,200);
  jungle.addImage(jungleImage);
  jungle.x=jungle.width/2;
  jungle.velocityX=-6;
  
  bananaGroup=newGroup();
  obstacleGroup=newGroup;
}


function draw(){
 background(180); 
 score=score+Math.round(getFrameRate()/60);
  text("score :"+score,500,50);
    if(keyDown("space")) {
    monkey.velocityY = -10;
  }
    if (ground.x < 0){
    ground.x = ground.width/2;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  spawnBananas();
  spawnObstacles();
  drawSprites();
}
function spawnBananas(){
  if(frameCount % 60 === 0){
    banana=createSprite(600,120,50,10);
    banana.addImage(bananaImage);
    banana.velocityX=-3;
    banana.lifetime=200;
    banana.y=Math.round(random(50,150));
    bananaGroup.add(banana);
    if(monkey.isTouching(bananaGroup)){
      score=score+2;
    }
  }
}
function spawnObstacles(){
  if(frameCount % 60 === 0){
    obstacle=createSprite(600,160,10,50);
    obstacle.VelocityX=ground.VelocityX;
    obstacle.scale=0.5;
    obstacle.addImage(obstacleImage);
    obstacle.lifetime=100;
    obstacleGroup.add(obstacle);
  }    
}  