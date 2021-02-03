const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var fairyImg, starImg, starNightImg, starBody, star, fairyBody, fairy, music;

function preload()
{
   fairyImg = loadAnimation("images/fairy1.png", "images/fairy2.png");
   starImg = loadAnimation("images/star.png");
   starNightImg = loadImage("images/starnight.png");
   music = loadSound("sound/JoyMusic.mp3")
}

function setup() {
  createCanvas(800, 750);
  engine = Engine.create();
  world = engine.world;

  star = createSprite(100, 100, 20, 20);
  star.addAnimation("starImg", starImg);
  star.scale = 0.25;

  fairy = createSprite(100, 500, 20, 20);
  fairy.addAnimation("fairyImg", fairyImg);
  fairy.scale = 0.25;

  starBody = Bodies.circle(750, 50, 20, {restitution:0.4, isStatic:true})
  World.add(world, starBody);

  Engine.run(engine);
}


function draw() {
  background(starNightImg);
  star.x = starBody.position.x;
  star.y = starBody.position.y;

  if (keyDown("left")) {
    fairy.velocityX = -5;
    
  }
  if (keyDown("right")) {
    fairy.velocityX = 5;
    
  }
  if(keyWentDown("right")){
    music.play();
  }
  if(keyWentUp("left")||keyWentUp("right")) {
     fairy.velocityX = 0;
  }
  if(keyDown("down")){
    starBody = Bodies.circle(750, 50, 20, {restitution:0.4, isStatic:false})
    World.add(world, starBody);
  }
  if( starBody.position.y > 470 ){
    starBody = Bodies.circle(750, 470, 20, {restitution:0.4, isStatic:true})
    World.add(world, starBody);
    music.stop();
  }


  drawSprites();
  
}
