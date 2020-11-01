const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var polygon

var ground1
var engine, world;
var box1, box2

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new ground(200,380,1200,40)
    ground2=new ground(285,195,140,20)
    box1 = new Box(300,50,30,30);
    box3=new Box(280,100,30,30)
    box4=new Box(290,100,30,30)

    box5=new Box(334 ,50,30,30)
    box2=new Box(250,50,30,30)

    polygon=Bodies.circle(620,200,20)
    World.add(world,polygon)

    slingshot=new Slingshot(this.polygon,{x:620, y:100})

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box3.display()
    box2.display()
    box4.display()
    box5.display()
    ground1.display()
    ground2.display()
    slingshot.display();
    ellipseMode(CENTER)
    ellipse(polygon.position.x, polygon.position.y, 20, 20)
    text(mouseX+":"+mouseY,20,20)
}

function mouseDragged(){
    
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
   
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
if (keyCode==32){
    slingshot.attach(this.polygon);
}
}