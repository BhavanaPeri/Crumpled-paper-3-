
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

		//Create the Bodies Here.
	paper= new Paperclass(100,350,25);
	bin =  new Dustbin(650,570,140,20);
	Dbin=  new Dustbin(580,570,20,100);
	dbin=  new Dustbin(720,570,20,100);
	 
	launcher = new Launcher(paper.body,{x:100,y:300})
	var groundSprite=createSprite(400, 640, 800,120);
	groundSprite.shapeColor=color(200);
	var ground= Bodies.rectangle(400,650,800,100,{isStatic:true});
	World.add(world, ground);

   Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(255);
	paper.display(); 
	Dbin.display(); 
	dbin.display();
	bin.display ();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}



