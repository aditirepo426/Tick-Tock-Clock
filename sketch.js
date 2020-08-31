var hr , min , sec , angle;
var end1 , end2 , end3;

function setup() {
  createCanvas(400,400);

  hr = hour();
  min = minute();
  sec = second();

  angleMode(DEGREES);

}

function draw() {
  background("black");  

   
  push();
  translate(0,0);
  strokeWeight(8);
  noFill();
  stroke(255,100,150);
  end1 = map(sec,0,60,0,360);
  arc(200,200,300,300,0,end1);
  pop();

  push();
  translate(0,0);
  strokeWeight(8);
  noFill();
  stroke(255,80,150);
  end2 = map(min,0,280,0,360);
  arc(205,200,300,300,0,end2);
  pop();

  push();
  translate(0,0);
  strokeWeight(8);
  noFill();
  stroke("white");
  end3 = map(hr,0,60,0,360);
  arc(210,200,300,300,0,end3);
  pop();

  

  
  
  drawSprites();
}