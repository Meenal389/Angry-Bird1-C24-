class Pig{
    constructor(x,y){
    var options={
        restitution: 0.5,
        density: 1,
        friction: 1
    }

    this.body=Bodies.rectangle(x,y,40,40,options);
    this.width=40;
    this.height=40;
    World.add(myWorld,this.body);
    }

    display(){
        var pos=this.body.position;
        var ang=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        rectMode(CENTER);
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
    }
}