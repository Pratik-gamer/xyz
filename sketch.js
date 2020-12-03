const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, dustbinImage, paper;


function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);


  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 390, 100, 10);
  paper = new Paper(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
    // background("black");
       rectMode(CENTER);
    background(0);

    dustbin.display();
    paper.display();
    if (keyDown("space")) {
      Matter.Body.applyForce(paper.body, paper.body.position, {
        x: 5,
        y: -10
      });
    }
  }
