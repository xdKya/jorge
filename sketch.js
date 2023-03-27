var jorge, jorgeImg;
var bordas;

function preload() {
  //pré carrega imagens, animações, sons, etc

  jorgeImg = loadAnimation("trex3.png", "trex4.png");
}

function setup() {
  //função de configuração

  createCanvas(600, 200);

  jorge = createSprite(50, 100, 20, 20);
  jorge.addAnimation("running", jorgeImg);
  jorge.scale = 0.5;

  bordas = createEdgeSprites();
}

function draw() {
  background("white");

  if (keyDown("space")) {
    jorge.velocityY = -10;
  }

  //gravidade
  jorge.velocityY = jorge.velocityY + 1;

  jorge.collide(bordas);

  drawSprites();
}
