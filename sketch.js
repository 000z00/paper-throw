
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,200,20);

	dustbin = new Dustbin(1100,586);

	ground = new Ground(800,600,1600,10);	

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
	dustbin.display();

	ground.display();

	paper.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-80});
	}
}

