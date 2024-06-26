//ENZO GUSTAVO MAÇANEIRO
// FUNÇÂO MAP com radianos
// USANDO a função MAP para mapear o angulo de rotação em radianos
// IMplementar a velocidade e a aceleração angular.
// A função MAp usa 5 parâmetros:
// Valor Inicial (Posição atual do mouse)
// Intervalo (0, width)
// Intervalo Final (-0.01, 0.01), medidos em radinos.

let angulo = 0;
let anguloV = 0;
let anguloA = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
}

function draw() {
  anguloA = map(mouseX, 0, width, -0.01, 0.01);
  
  background(127, 83, 163);
  noStroke();
  fill(240, 99, 164);
  rectMode(CENTER);
  translate(200, 200);
  rotate(angulo);
  rect(0, 0, 256, 32);

  angulo += anguloV;
  anguloV += anguloA;
}