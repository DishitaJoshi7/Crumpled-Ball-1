class Paper{
    constructor(x,y,r){
        var op = {
            'restitution' : 0.3,
            'friction' : 0.4,
            'density' : 2.9,
        }
        this.object = Bodies.circle(x, y,r/2, op );
        World.add(world, this.object);

        this.r = r
        //this.h = height;
    }
    display(){
    var pos = this.object.position;
      var angle = this.object.angle;
      push()
      translate(pos.x,pos.y)
     // angleMode(DEGREES)
    //  rotate(this.object.angle)
      ellipseMode(RADIUS)
      fill("cyan")
      ellipse(0,0,this.r,this.r)
      pop()
    }

   
}