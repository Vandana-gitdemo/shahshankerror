class ground_maker
{
  constructor(x, y, width, height)
  {
    var doomguy ={
      isStatic : true
    }
    this.body = bodies.rectangle(x, y, width, height, doomguy)
    this.width = width
    this.height = height
    world.add(world_2, this.body)
  } 
display()
{
    var pos = this.body.position;
    fill("brown")
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
}
}
