
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Hammer1 = new Hammer(100,100,200,45);
	Ground1 = new Ground(400,690,800,20);
	Stone1 = new Stone(200,300,100,100)
	Rubber1 = new Rubber(585,300,50)
	Sand1 = new Sand(400,300,5)
	Sand2 = new Sand(415,300,5)
	Sand3 = new Sand(430,300,5)
	Sand4 = new Sand(445,300,5)
	Sand5 = new Sand(460,300,5)
	Sand6 = new Sand(475,300,5)
	Sand7 = new Sand(490,300,5)
	Sand8 = new Sand(505,300,5)
	Sand9 = new Sand(520,300,5)
	Sand10 = new Sand(535,300,5)
	Iron1 = new Iron(650,300,100,50)
    
	Engine.run(engine);
  
}


function draw() {
  background("lightBlue");

  rectMode(CENTER);
  Hammer1.display();
  Ground1.display();
  Stone1.display();
  Iron1.display();
  ellipseMode(RADIUS)
  Rubber1.display();
  Sand1.display();
  Sand2.display();
  Sand3.display();
  Sand4.display();
  Sand5.display();
  Sand6.display();
  Sand7.display();
  Sand8.display();
  Sand9.display();
  Sand10.display();

  drawSprites();
 
}



