var a1 
var a2



function setup() {
  createCanvas(800,400);
  a1=createSprite(400, 200, 50, 80);
a2=createSprite(200,200,80,30)
a1.shapeColor="green"
a2.shapeColor="green"
}

function draw() {

  background(0);  

a2.y=mouseY
a2.x=mouseX

if(a2.x-a1.x<a1.width/2+a2.width/2
  && a1.x-a2.x<a1.width/2+a2.width/2
  && a2.y-a1.y<a1.height/2+a2.height/2
  && a1.y-a2.y<a1.height/2+a2.height/2){
    a1.shapeColor="blue"
    a2.shapeColor="blue"


  }


else{
  a1.shapeColor="green"
  a2.shapeColor="green"

}


  drawSprites();
}