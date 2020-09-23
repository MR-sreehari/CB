
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {

	var r1=createSprite(550,650,200,20);
  r1.shapeColor="violet";
  var r2=createSprite(455,590,20,100);
  r2.shapeColor="violet";
  var r3=createSprite(645,590,20,100);
  r3.shapeColor="violet";

  rectMode(CENTER);
  background(0);

  var ground=createSprite(210,670,1300,10);
  ground.shapeColor="orange";
  
  drawSprites();
 
}
function keyPressed()
 { if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
   }
   }


