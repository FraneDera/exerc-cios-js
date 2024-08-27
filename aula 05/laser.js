class Laser{
  constructor(spos, angle){
    this.pos = createVector(spos.x,spos.y);
    this.vel = p5.Vector.fromAngle(angle);
    this.vel.mult(12);
  }
  
  update(){
    this.pos.add(this.vel);
  }
  
  render(){
    push();
    stroke(random(0,255),random(0,255),random(0,255));
    strokeWeight(5);
    point(this.pos.x,this.pos.y);
    pop();
  }
}