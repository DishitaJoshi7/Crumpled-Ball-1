class Dustbin{
        constructor(x,y,w,h){
      var op = {
          'restitution' : 0.8,
          'friction' : 0.3,
          'density' : 1.0,
     }
     this.dustbin = Bodies.rectangle(x,y,w,h,op);
     World.add(world, this.dustbin);

     this.w = w;
     this.h = h;


   } 
     display(){
        var pos = this.dustbin.position;
        push()
        translate(this.x,this.y)
        rectMode(CENTER)
        rect(0,0,this.w,this.h);
        pop()
     }

}
