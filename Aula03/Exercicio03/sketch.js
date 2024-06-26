// ENZO GUSTAVO MAÇANEIRO
// FUNÇÃO MAP criando um cronometro (Jogo) 

let objeto;
let jogador;
let raio = 30;
let timer = 5;
let pontos = 0;

function setup() {
  createCanvas(400, 400);
  objeto = createVector(random(0, width), random(0, height));
}

function draw() {
  timer -= 1/60;
  jogador = createVector(mouseX, mouseY);
  
  background(220);
  
  // ----- Verificando tempo -----//
  
  if(timer <= 0){
    textSize(36);
    text("GAME OVER", 85, 200);
    noLoop();
  }
  
  // ----- Criando Obj -----//
  
  circle(objeto.x, objeto.y, raio);
  
  // ----- Mapeando Tempo -----//
  
  let comprimento = map(timer, 0, 5, 0, 200);
  rect(20, 20, 10, comprimento);
  
  
  textSize(24);
  text(pontos, 180, 40);
}

  // ----- Implementando clique -----//

function mousePressed(){
  let dis = p5.Vector.dist(jogador, objeto);
  
  // ----- Verificando Distância do Clique -----//
  
    if(dis < raio){
      objeto = createVector(random(0, width), random(0, height));
      timer += 0.5;
      pontos += 1;
    }
}

// Criar o objeto CLICK
// Criar o vetor CLICK
// Mover o objeto qnd clicado
// Criar o timer usando MAP
// Criar Pontos do Jogo