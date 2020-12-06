class piggies_class
{
    constructor(x, y)
    {
        var options = {restitution: 0.8,
        friction:1, density:1}
        this.bodies_2 = bodies.rectangle(x, y, 50, 50, options)
        this.width = 50; this.height = 50;
        world.add(world_2, this.bodies_2)
    }
    display()
    {
        var pos_2 = this.bodies_2.position;
        var angle = this.bodies_2.angle;
        push();
        
        
        translate(pos_2.x, pos_2.y)
        rotate(angle)
        rectMode(CENTER)
        fill("Green")
        rect(0, 0, this.w, this.h) 
        pop();
    }
}