const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
 var particles = [];
 var plinkos = [];
 var divisions = [];
  var divisionHeight = 300;
function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
for (var k = 0; k <width; k = k +80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}

for (var j = 40; j <=width; j = j +50)
{
  plinkos.push(new Plinko(j,75));
}
for (var j = 1; j<=width-10; j = j +50)
{
  plinkos.push(newPlinko(j,175));
}

if(frameCount)