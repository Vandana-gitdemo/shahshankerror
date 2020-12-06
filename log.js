class log_class
{
    constructor(x, y, height, angle)
    {
        var options = {restitution: 0.8,
        friction:1.0, density:1.0}
        this.bodies_2 = bodies.rectangle(x, y, 20, height, options)
        this.width = 20;
        this.height =height;
        Matter.Body.setAngle (this.bodies_2, angle)
        world.add(world_2, this.bodies_2)
    }
    display()
    {
        var pos_2 = this.bodies_2.position;
        var angle = this.bodies_2.angle ;
        push();
          
        translate(pos_2.x, pos_2.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0, 0, this.width, this.height) 
        pop();
    }
}