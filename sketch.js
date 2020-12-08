const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myEngine;
var myWorld;

function setup(){
  createCanvas(1200,400);
  
  myEngine=Engine.create();
  myWorld=myEngine.world;
  
  box1=new Box(700,350,70,70)
  box2=new Box(930,350,70,70)
  box3=new Box(700,200,70,70);
  box4=new Box(930,200,70,70)
  box5=new Box(815,160,70,70)

  pig1=new Pig(815,350)
  pig2=new Pig(815,200)
  
  log1=new Log(815,270,330,PI/2)
  log2=new Log(815,190,330,PI/2)
  log3=new Log(790,120,150,PI/7)
  log4=new Log(810,120,150,-PI/7)

  bird=new Bird(200,100)

  ground=new Ground(600,390,1200,20);
}

function draw(){
  background("lightblue");
  Engine.update(myEngine)

  bird.display()
  log1.display()
  log2.display()
  log3.display()
  log4.display()
  pig1.display()
  pig2.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
 ground.display()
}