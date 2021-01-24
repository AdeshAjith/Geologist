class Stone{
    constructor(x,y,width,height){
        var StoneOptions = {
          'density':5,
          'friction':3.0,
          'restitution':0.2
        }
        this.body = Bodies.rectangle(x,y,width,height,StoneOptions);
        this.width = width
        this.height = height
        World.add(world,this.body) 
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push ()
        translate (pos.x,pos.y)
        fill ("gray")
        rotate (angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop ()
    }
}