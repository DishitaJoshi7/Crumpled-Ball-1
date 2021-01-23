class Dustbin{
        constructor(x,y,w,h){
          var op = {
            //'restitution' : 0.8,
            //'friction' : 0.3,
            //'density' : 1.0,
       }
     this.dustbin = Bodies.rectangle(x,y,w,h,{isStatic : true});
     World.add(world, this.dustbin);

   /*  this.rightside = Bodies.rectangle(x,y,w,h,{isStatic : true});
     World.add(world, this.rightside);

     this.leftside = Bodies.rectangle(x,y,w,h,{isStatic : true});
     World.add(world , this.leftside);*/

     this.w = w;
     this.h = h;

          
     

   } 
     display(){
        var pos = this.dustbin.position;
        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h);

       
     }

}
