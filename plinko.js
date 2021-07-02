class Plinko{
    constructor(x,y,radius){
    var options = {
        isStatic: true
    }
    this.body = Bodies.circle(x,y,this.radius,options);
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        
    }
};