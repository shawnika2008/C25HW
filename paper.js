class Paper {
  constructor() {
    var options = {
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2
    }
  this.body = Bodies.circle(100,376,2,options);
  this.width = 200;
  this.image = loadImage("photo/paper.png");
  //this.body = loadImage("sprites/paper.js");

  World.add(world, this.body);
  }
 display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y); 
    imageMode(CENTER);
    //fill("yellow");
    image(this.image, 0, 0, this.width );
    pop();
  }
};
