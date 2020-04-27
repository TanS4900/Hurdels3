var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var Hurdels, Hurdel1, Hurdel2, Hurdel3, Hurdel4, TracksOFRace;

var RaceTrack, Hurdel1_img, Hurdel2_img, Hurdel3_img, Hurdel4_img;

function preload(){
  RaceTrack = loadImage("sprites/roadRacer.jpeg");
  Hurdel1_img = loadImage("sprites/runningRunner1.gif");
  Hurdel2_img = loadImage("sprites/runningRunner1.gif");
  Hurdel3_img = loadImage("sprites/runningRunner1.gif");
  Hurdel4_img = loadImage("sprites/runningRunner1.gif");
  ground = loadImage("sprites/roadRacer.jpg");

  Hurdel1 = Hurdel1_img
  Hurdel2 = Hurdel2_img
  Hurdel3 = Hurdel3_img
  Hurdel4 = Hurdel4_img
  TracksOFRace = RaceTrack
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  user = new User();
  game.getState();
  game.start();
}


function draw(){
  
  
  if(userCount === 4){
    game.update(1);
    background("blue")
  }

  if(gameState === 1){
    clear();
    game.play();
    backgroundImage = TracksOFRace;
  }

  if(gameState === 2){
    game.end();
  }

  drawSprites();
}
