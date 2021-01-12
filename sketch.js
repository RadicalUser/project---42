var hr  ;
var min ;
var sec;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0); 
  hr = hour(); 
  min = minute();
  sec = second();

  angleMode(DEGREES);
translate(200,200);
rotate(-90);
  secAngle= map(sec,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);
  minAngle= map(min ,0 ,60,0,360);

  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  push();
  rotate(minAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  
strokeWeight(10);
stroke("red");
noFill();
arc(0,0,300,300,0,secAngle);

strokeWeight(10);
stroke("yellow");
noFill();
arc(0,0,260,260,0,hrAngle);

strokeWeight(10);
stroke("green");
noFill();
arc(0,0,280,280,0,minAngle);


  
  
  
  
  

}