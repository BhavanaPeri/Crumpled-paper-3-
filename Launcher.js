class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    display(){
       // push();
        if(this.sling.bodyA){
        pointA=this.sling.bodyA.position;
        pointB = this.pointB;
        stroke(0);
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        //pop();
        }
    }
    fly(){
        this.sling.bodyA = null;
    }
}
