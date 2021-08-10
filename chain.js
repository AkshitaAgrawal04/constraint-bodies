class chain{
    constructor(body1,body2){
        var options={
            bodyA: body1,
            bodyB: body2,
            stiffness:0.04,
            legnth:10,
        }
        this.link= Matter.Constraint.create(options);
        World.add(world, this.link);
    }
    display(){
        var posA= this.link.bodyA.position;
        var posB= this.link.bodyB.position;
        strokeWeight(3);
        line(posA.x, posA.y, posB.x, posB.y);
    }
}