
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

	mango1=new mango(1100,100,30);
stoneObj=new stone(235,420,20)
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {


  background(230);
  //Add code for displaying text here!
 
  image(boy ,200,340,200,300);

detectcollision(stoneObj,mango1);
detectcollision(stoneObj,mango2);
detectcollision(stoneObj,mango3);
detectcollision(stoneObj,mango4);
detectcollision(stoneObj,mango5);

function keyPressed(){
if(keyCode===32){
	matter.Body.setPosition(stoneOBj.body,{x:235,y:420})
	launcherObject.attach(stoneObj.body);
}	
}

  
  treeObj.display();''
  mango1.display();
  mango2.display();
  mango3.diaplay();
  mango4.diplay();
  mango5.diaplay();
 stoneObj.display();
  groundObject.display();
  launcherObject.display();
}
function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoPosition.body.y)
if(distance<=lmango.r+lstone.r)
{
  Matter.Body.setStatic(lmango.body,false);
}
}