class Ground
{
constructor(x, y, width, height)
{
    var options={
    isStatic :true
    }

    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle
    (this.x, this.y, this.width, this.height, options)
    this.width=width
    this.height=height
    World.add(world, this.body);
}
display()
{
    var grounds=this.body.position;
    translate(grounds.x, grounds.y);
    rectMode(CENTER)
    push()
    strokeWeight(3);
    fill(255, 0, 255)
    rect(grounds.x, grounds.y, this.width, this.height);
    pop()
    
}
}