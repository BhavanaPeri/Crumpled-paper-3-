class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
        this.image = loadImage("dustbingreen.png");
        this.x=x;
        this.y=y;
        this.width= width;
        this.height= height;
        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        
    }
    display(){
     
      rectMode (CENTER);
      this.body.visible=false;
     // fill ("brown");
     // rect(this.body.position.x,this.body.position.y,this.width,this.height);
      image(this.image,580,500,140,80);
    }
}