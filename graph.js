console.log('graph.js');

var width = 800, height = 450;

canvas.width = width;
canvas.height = height;
canvas.style.backgroundColor = '#E0E0E0FF';

var fillRect = function(x, y, w, h){
	ctx.fillRect(this.x, this.y, this.w, this.h);
}

var clearRect = function(x, y, w, h){
	ctx.clearRect(x, y, w, h)
}

var drawBall = function (){
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
	ctx.fill();
}

var drawLine = function () {
	ctx.lineWidth = 1;
	ctx.moveTo(canvas.width/2, 0);
	ctx.lineTo(canvas.width/2, canvas.height);
	ctx.stroke();
}