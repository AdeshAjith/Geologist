class Hammer{
    constructor(x,y,width,height){
      var HammerOptions = {
          'density':2,
          'friction':1.0,
          'restitution':0.5
      }  
      this.body = Bodies.rectangle(x,y,width,height,HammerOptions);
      this.width = width;
      this.height = height;
      World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        pos.x  = mouseX
        pos.y = mouseY
        push ()
        translate(pos.x,pos.y)
        fill ("orange")
        rotate (angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop ()
    }
}