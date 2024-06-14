//FRANCISCO
//Aula02 - JavaScript Arrays
//P.O.O e Encapsulamento

//ARRAYS BOLHAS

let bolhas = [];

function setup() {
  createCanvas(600, 400);
}

function mouseDragged(){
  let r = random(10, 50);
  let bolha = new Bolha(mouseX, mouseY, r, color(255, 255, 0));
  bolhas.push(bolha);
}

function draw() {
  background(0);
  for (let i = 0; i < bolhas.length; i++){
  bolhas[i].mover();
  bolhas[i].exibir();
  bolhas[i].colisao();
  }
}

//----- Criando a Classe Bolhas -----//

class Bolha{
  constructor(x, y, r, s){
    this.x = x;
    this.y = y;
    this.r = r;
    this.s = s;
    this.vx = random(2,6);
    this.vy = random(2,6);
  }
  mover(){
    this.x += this.vx;
    this.y += this.vy;
  }
  exibir(){
    stroke(this.s);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r);
  }
  colisao(){
    if (this.x > 588 || this.x < 12){
      this.vx *= -1;
    }
    if (this.y > 388 || this.y < 12){
      this.vy *= -1;
    }
  }
}

