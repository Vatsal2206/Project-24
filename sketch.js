const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,wall1,wall2,wall3,ground1,border1,border2,border3;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(width/2,650,width,10);
	border1 = new Ground(800,350,1,height);
	border2 = new Ground(400,0,width,1);
	border3 = new Ground(0,400,1,height);

	wall1 = new Wall(670,636,160,20);
	wall2 = new Wall(590,566,20,160);
	wall3 = new Wall(750,566,20,160);

	ball1 = new Ball(250,600);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("black");
  
  drawSprites();

  keyPressed();

  textSize(20);

  fill(78, 245, 131)
  text("The ball is a CRUMPLED PAPER BALL",50,20);

  fill(242, 91, 80);
  text("The thing in light blue colour is Dustbin",50,50)

  fill(250, 82, 239);
  text("You need to throw the paper into dustbin",50,80)

  fill(78, 245, 131);
  text("Press UP ARROW to throw the paper ball towards the dustbin.",50,110);

  fill(242, 91, 80);
  text("Press DOWN ARROW to throw the paper ball away from dustbin.",50,140);

  fill(203, 245, 206);
  text("Press any key except UP and DOWN ARROWS to neutralize the ball.",50,170);

  fill(250, 82, 239);
  text("It's a bit hard but u need to clean ur room!!!!",50,200)

  ground1.display();
  wall1.display();
  wall2.display();
  wall3.display();
  ball1.display();

}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x: 15,y: -15})
	}

	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x: -10,y: +10})
	}

}

