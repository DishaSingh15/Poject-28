const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2 = new Mango(1200,100,30);
	mango3=new Mango(1300,100,30);
	mango4 = new Mango(1400,100,30);
	mango5=new Mango(1500,100,30);

	stoneObj = new Stone(200,350,20,20);

	treeObj=new tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy,200,340,200,300);
  

  treeObj.display();
  mango1.display();

  groundObject.display();

  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stoneObj.display();

 detectCollision(stoneObj,mango1);
 detectCollision(stoneObj,mango2);
 detectCollision(stoneObj,mango3);
detectCollision(stoneObj,mango4);
 detectCollision(stoneObj,mango5);
  }
function keyPressed() {
	if (keyCode === 32) {
	Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
	launcherObject.attach(stoneObj.body);
}
}

function detectCollision(lstone,lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.r+lstone+r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

