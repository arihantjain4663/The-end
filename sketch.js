var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var boys, boy1, boy2, boy3, boy4;

var track, boy1_img, boy2_img, boy3_img, boy4_img;

function preload(){
  track = loadImage("images/track.jpg");
  boy1_img = loadImage("images/boy1.png");
  boy2_img = loadImage("images/boy2.png");
  boy3_img = loadImage("images/boy3.png");
  boy4_img = loadImage("images/boy4.png");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
