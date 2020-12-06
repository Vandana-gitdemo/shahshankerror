
class box_class
{
    constructor(x, y, width, height)
    {
        var options = {restitution: 0.8,
        friction:1, density:1}
        this.body = bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        world.add(world_2, this.body)
    }
    display()
    {
        var pos_2 = this.body.position;
        var angle = this.body.angle;
        push();
       
        
       fill("yellow")
        translate(pos_2.x, pos_2.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0, 0, this.width, this.height) 
        pop();
    }
}
