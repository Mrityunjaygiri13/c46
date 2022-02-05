var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var board,boardImg;
var striker,strikerImg;
var b1,b2,b3,b4;
var blackCoin1,blackCoin2,blackCoin3,blackCoin4,blackCoin5, blackCoinImg;
var whiteCoin1,whiteCoin2,whiteCoin3,whiteCoin4,whiteCoin5, whiteCoinImg;
var redCoin, redCoinImg;

function preload(){
boardImg=loadImage("images/frame.jpg");
strikerImg=loadImage("images/striker.png");
blackCoinImg=loadImage("images/Bcoin.png");
whiteCoinImg=loadImage("images/Wcoin.png");
redCoinImg=loadImage("images/Rcoin.png");


}

function setup() {
  createCanvas(1536,745);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function draw() {

  background("skyblue");

  if(playerCount === 1){
    game.update(1);
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