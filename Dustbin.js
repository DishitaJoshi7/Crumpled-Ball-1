class Dustbin{
        constructor(x,y,w,h){
      var op = {
          'restitution' : 0.8,
          'friction' : 0.3,
          'density' : 1.0,
     }
          this.bottom = Bodies.rectangle(width/2,630,200,20);
          World.add(world,this.bottom);
    
          this.rightSide = Bodies.rectangle(500,610,20,100);
          World.add(world,this.rightSide);

          this.leftSide = Bodies.rectangle(300,610,20,100);
          World.add(world,this.leftSide);
           this.w = w;
           this.h = h;

   } 
     display(){
        var pos = this.bottom.position;
        var pos = this.rightSide.position;
        var pos = this.leftSide.position;
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
     }

}
