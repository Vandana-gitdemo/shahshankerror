const engine =  Matter.Engine
const world =  Matter.World
const bodies = Matter.Bodies

var engine_2
var world_2
var bodies_2

function setup() {
  createCanvas(1200, 400);
  engine_2 = engine.create()  
  world_2 = engine_2.world    
  ground = new ground_maker(600,height,1200,20)
  box = new box_class(700,320,70,70)
  box_2 = new box_class(920,320,70,70)
  piggies = new piggies_class(810, 350)
  log = new log_class(810, 260, 300, PI/2)
  box_3 = new box_class(700,240,70,70)
  box_4 = new box_class(920,240,70,70)
  piggies_2 = new piggies_class(810, 220)
  log_3 = new log_class(810,180,300, PI/2)
  box_5 = new box_class(810,160,70,70);
  log_4 = new log_class(760,120,150, PI/7);
  log_5 = new log_class(870,120,150, -PI/7);
  console.log(log)
}

function draw()
{
  background("lime");  
  engine.update(engine_2)
  ground.display();
  box.display();
  box_2.display();
  piggies.display();
  log.display();

  box_3.display();
  box_4.display();
  piggies_2.display();
  log_3.display();

  box_5.display();
  log_4.display();
  log_5.display();

}
