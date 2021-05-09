const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
}

//How can we add a Ground in our game?
//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;

//var engine, world;
//var box1, box2, ground2;

//function setup(){
//    var canvas = createCanvas(400,400);
//    engine = Engine.create();
//    world = engine.world;

//    box1 = new Box(200,300,50,50);
//    box2 = new Box(240,100,50,100);
//    ground = new Ground(200,height,400,20);
//    ground2 = new Ground(150,150,200,20);
//}

//function draw(){
//    background(0);
//    Engine.update(engine);
    
//    box1.display();
//    box2.display();
//    ground.display();
//    ground2.display();
//}