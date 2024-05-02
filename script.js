/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name:
 * 
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */
var gameState = "splash"; // lab 13
var player1; // lab 14
var timer // lab 15

function setup() {
  createCanvas(600, 400);
  player1 = new Player(width/2, height * 7/8);

  timer = new Timer(10000); 

}

function draw() {
  background(200);
  /* un-comment each line to see it work */
  //splash(); // call the splash screen function (below)
  //play(); // call the play screen function (below)
  //gameOver(); // call the gameOver screen function (below)
  switch (gameState)  {
    case "splash" :
      splash(); // go to the "splash" screen
      break;
    case "play" :
      play(); // go to the "play" screen
      break;
    case "gameOver" :
      gameOver(); // go to the "game over" screen
      break;
    default :
      console.log("no match found - check your mousePressed() function!");
  
  }
}

function splash() {
  // this is what you would see when the game starts
  background(200);
  textAlign(CENTER);
  textSize(16);
  text("Let's Play a Game!", width / 2, height / 2);
  textSize(12);
  text("(click the mouse to continue)", width / 2, height / 2 + 30);
}

function play() {
  // this is what you see when the game is running 
  background(0, 200, 0);
  fill(0, 0, 200)
  textAlign(CENTER);
  textSize(16);
  text("This is where the Game happens", width / 2, height / 2);
  player1.display();
  //player1.move(); // would make player follow mouse

if(timer.isFinished()){
  gameState = "gameOver";
}

text("elapsed time: " + timer.elapsedTime, width/2, 100);
}

function gameOver() {
  // this is what you see when the game ends
  background(0);
  fill(255, 0, 0)
  textAlign(CENTER);
  textSize(16);
  text("Game Over!", width / 2, height / 2);
}

function mousePressed() {

  // console.log("click!");
  if(gameState == "splash") { 
    gameState = "play"; 
    timer.start();
} // go to "play"
else if(gameState == "play") { 
    gameState = "gameOver"; 
} // go to "gameOver"
else if(gameState == "gameOver") { 
    gameState = "splash"; 
} // go to "splash"
  console.log(gameState);
}

function keyPressed() {
  switch (keyCode){
    case UP_ARROW :
        player1.y -= 30;
        player1.angle = 0;
        if(player1.y < 0) player1.y = height;
        break;
    case DOWN_ARROW :
        player1.y += 30;
        player1.angle = PI;
        if(player1.y > height) player1.y = 0;
        break;
    case LEFT_ARROW :
        player1.x -= 30;
        player1.angle = PI + PI/2;
        if(player1.x < 0) player1.x = width;
        break;
    case RIGHT_ARROW :
        player1.x += 30;
        player1.angle = PI/2;
        if(player1.x > width) player1.x = 0;
        break;
      default:
  }
  }

