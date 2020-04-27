var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var Hurdels, Hurdel1, Hurdel2, Hurdel3, Hurdel4;

var RaceTrack, Hurdel1_img, Hurdel2_img, Hurdel3_img, Hurdel4_img;

function preload(){
  raceTrack = loadImage("sprites/hurdelBack34.jpg");
  Hurdel1_img = loadImage("sprites/runningRunner1.gif");
  Hurdel2_img = loadImage("sprites/runningRunner1.gif");
  Hurdel3_img = loadImage("sprites/runningRunner1.gif");
  Hurdel4_img = loadImage("sprites/runningRunner1.gif");
  ground = loadImage("sprites/hurdelBack34.jpg");

  Hurdel1 = Hurdel1_img
  Hurdel2 = Hurdel2_img
  Hurdel3 = Hurdel3_img
  Hurdel4 = Hurdel4_img

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  
  if(userCount === 4){
    game.update(1);
    background = raceTrack
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }

  drawSprites();
}
