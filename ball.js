class Ball {
    constructor(x, y) {
      var Boptions = {
          'isStatic':false,
          'restitution':0.8,
          'friction':0.3,
          'density':1.2
      }
      this.body = Bodies.circle(x, y,30, Boptions);
      this.radius = 30;
      
      World.add(world, this.body);
    }
    display(){
      ellipseMode(RADIUS);
      stroke(58, 6, 82)
      fill(208, 107, 255);
      ellipse(this.body.position.x,this.body.position.y, this.radius);
    }
  };