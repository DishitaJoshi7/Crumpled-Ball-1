
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var rightSide;
var leftSide;
var bottom;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,350,800,15);
	ball = new Paper(200,200,15);
	rightSide = new Dustbin(500,610,20,100);
	leftSide = new Dustbin(300,610,20,100);
	bottom = new Dustbin(width/2,630,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.show();
  ball.display();
  rightSide.display();
  leftSide.display();
  bottom.display();

  
 
}



