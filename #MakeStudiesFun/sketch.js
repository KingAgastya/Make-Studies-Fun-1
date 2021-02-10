var robot, cloud, startButton;
var startImg, cloudImg, robotImg;

function preload(){
    robotImg = loadImage("Robot.png");
    cloudImg = loadImage("speech_bubble.png");
    startImg = loadImage("Play.png")
}

function setup(){
    robot = createSprite(200, 200, 20, 20);
    cloud = createSprite(75, 88, 20, 20);
    startButton = createSprite(200, 300, 20, 20);

    robot.addImage(robotImg)
    cloud.addImage(cloudImg)
    startButton.addImage(startImg)
    var gameState = "Start";
}

robot.scale = 0.5;
cloud.scale = 0.25;
startButton.scale = 0.25;

function draw() {
  background("cyan");
  createCanvas(400, 400)
  
  if (gameState === "Start"){
    textSize(30);
    text("Welcome to the App", 75, 200);
    
    startButton.visible = true;
    robot.visible = false;
    cloud.visible = false;
    
    if (mousePressedOver(startButton)){
      gameState = "getInfo";
    }
  }
  
  if (gameState === "getInfo"){
    startButton.visible = false;
    robot.visible = true;
    cloud.visible = true
  }
  
  drawSprites();
}
var robot = createSprite(200, 200, 20, 20);
var cloud = createSprite(75, 88, 20, 20);
var startButton = createSprite(200, 300, 20, 20);

var gameState = "Start";

robot.setAnimation("robot_18");
cloud.setAnimation("cloud");
startButton.setAnimation("start");

robot.scale = 0.5;
cloud.scale = 0.25;
startButton.scale = 0.25;

function draw() {
  background("cyan");
  
  if (gameState === "Start"){
    textSize(30);
    text("Welcome to the App", 75, 200);
    
    startButton.visible = true;
    robot.visible = false;
    cloud.visible = false;
    
    if (mousePressedOver(startButton)){
      gameState = "getInfo";
    }
  }
  
  if (gameState === "getInfo"){
    startButton.visible = false;
    robot.visible = true;
    cloud.visible = true
  }
  
  drawSprites();
}
