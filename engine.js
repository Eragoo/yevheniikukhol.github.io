console.log('engine.js');


var Platform = {
  x : 30,
  y : 180,
  w : 10,
  h : 70,
  s : 10,
  fillRect : fillRect,
  move : move

};

var Platform2 = {
  x : canvas.width-30,
  y : 180,
  w : Platform.w,
  h : Platform.h,
  s : Platform.s,
  fillRect : fillRect,
  move2 : move2
};

var Ball = {
  r : 8,
  x : 250,
  y : 250,//???this.r ????!!!
  s : 3,
  dx : 2,
  dy : 2,
  drawBall : drawBall,
  moveBall : moveBall,
  isCollusion : isCollusion,
  reverse : false
};


setInterval(function(){

  gameEngine();

}, 1000/60);

var gameEngine = function(){
  clearRect(0, 0, width, height);
  Platform.fillRect(this.x, this.y, this.w, this.h);
  Platform2.fillRect(this.x, this.y, this.w, this.h);
  Ball.drawBall();
  drawLine();

  //ctx.strokeRect(Ball.x- Ball.r, Ball.y- Ball.r, Ball.r*2, Ball.r*2);
  Ball.isCollusion();
  Platform.move();
  Platform2.move2();
  Ball.moveBall();
  scoreCalc();
};
