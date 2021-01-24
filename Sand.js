class Sand{
    constructor(x,y,radius){
        var SandOptions={
            'density':1,
            'friction':5.0,
            'restitution':0.8
        }
        this.body = Bodies.circle(x,y,radius,SandOptions)
        this.radius = radius
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push ()
        translate(pos.x,pos.y)
        fill ("red")
        rotate (angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop ()
    }
}