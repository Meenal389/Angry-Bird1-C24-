class Box{

    //properties
    constructor(x,y,width,height){
        var options={
            restitution:0.8, 
            friction:1,
            density:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(myWorld,this.body);
    }

    //functions
    display(){
        var pos=this.body.position;
        var ang=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        rectMode(CENTER);
        fill("yellow");
        strokeWeight(3);
        stroke("purple");
        rect(0,0,this.width,this.height);
        pop();
    }
}