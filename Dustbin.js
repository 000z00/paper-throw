class Dustbin
{
	constructor(x,y)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.rWall=Bodies.rectangle(x+100,y-100,20,200, options);
        this.lWall=Bodies.rectangle(x-100,y-100,20,200,options);
        this.base=Bodies.rectangle(x,y,200,20,options);
 		World.add(world, this.base);
        World.add(world,this.rWall);
        World.add(world,this.lWall);

	}
	display()
	{
			
			var pos=this.base.position;		
            var lPos=this.lWall.position;		
            var rPos=this.rWall.position;		

			push()
			translate(pos.x,pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("yellow")
			rect(0,0,200,20);
			pop()
			
            push()
			translate(lPos.x,lPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("yellow")
			rect(0,0,20,200);
			pop()
			
            push()
			translate(rPos.x,rPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("yellow")
			rect(0,0,20,200);
			pop()
			
	}

}