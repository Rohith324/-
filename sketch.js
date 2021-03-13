
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var dusbin1,dustbin2,dustbin3;
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1=createSprite(400,650,200,20);
	dustbin1.shapeColor=("red");

	dustbin2=createSprite(300,575,20,170);
	dustbin2.shapeColor=("red");

	dustbin3=createSprite(500,575,20,170);
	dustbin3.shapeColor=("red");


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 RedZone1 = Bodies.rectangle(400,650,200,20, {isStatic:true});
	 World.add(world,RedZone1);


	Engine.run(engine);
  
    paperObject = new Paper(50,650,20);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  paperObject.display
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.positon,{x:85.y:-85});
	}
}


