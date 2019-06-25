var move = function(){
  
  if(isKeyDown('A')){
  	this.x -=this.s; 
  }

  if(isKeyDown('D')){
  	this.x +=this.s; 
  }

  if(isKeyDown('W')){
  	this.y -=this.s; 
  }

  if(isKeyDown('S')){
  	this.y +=this.s; 
  }
};


var move2 = function(){
  
  if(isKeyDown('left')){
    this.x -=this.s; 
  }

  if(isKeyDown('right')){
    this.x +=this.s; 
  }

  if(isKeyDown('up')){
    this.y -=this.s; 
  }

  if(isKeyDown('down')){
    this.y +=this.s; 
  }
};

var moveBall = function(){
  this.x -=this.dx;
  this.y -=this.dy;

};

var isCollusion = function () {
  if(collision(this.x - this.r, this.y - this.r, this.r*2, this.r*2, Platform.x, Platform.y, Platform.w, Platform.h)){
    this.dx *=-1;

    if(this.y <= Platform.y){
     this.y = Platform.y - this.r;
     this.dy *=-1;}

    if(this.y > Platform.y + Platform.h){
     this.y = Platform.y + Platform.h + this.r;
     this.dy *=-1;}

  }

  if(collision(this.x - this.r, this.y - this.r, this.r*2, this.r*2, Platform2.x, Platform2.y, Platform2.w, Platform2.h)){
    this.dx *=-1;

    if(this.y <= Platform2.y) {
     this.y = Platform2.y - this.r;
     this.dy *=-1;}

    if(this.y > Platform2.y + Platform2.h) {
     this.y = Platform2.y + Platform2.h + this.r;
     this.dy *=-1;
    }
  }



  if(this.x <= 0 + this.r ) {
    this.dx *= -1; 
    score[0]++;
  }

  if(this.x >= canvas.width - this.r){
    this.dx *=-1;
    score[1]++;
  }

  if(this.y <= 0 + this.r || this.y >= canvas.height - this.r){
    this.dy *= -1 ;
  }


};

var collision = function(x1, y1 ,w1, h1, x2, y2, w2, h2) {
  return (x1 < x2 + w2 &&
          x1 + w1 > x2 &&
          y1 < y2 + h2 &&
          y1 + h1 > y2) 
};

    

















