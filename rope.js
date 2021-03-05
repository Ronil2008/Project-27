class rope{
	constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2.5);

		var Attach1X=pointA.x
		var Attach1Y=pointA.y

		var Attach2X=pointB.x+this.offsetX
		var Attach2Y=pointB.y+this.offsetY

		line(Attach1X,Attach1Y,Attach2X,Attach2Y);
	}

}