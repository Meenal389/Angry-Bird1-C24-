class Ground{
   //properties
  constructor(x,y,width,height){
      var options={
          isStatic:true
      }
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width=width;
      this.height=height;
      World.add(myWorld,this.body);
  }

   //functions
   display(){
       var rec=this.body.position
    rectMode(CENTER);
     fill("brown")
     rect(rec.x,rec.y,this.width,this.height)
   }
   
}