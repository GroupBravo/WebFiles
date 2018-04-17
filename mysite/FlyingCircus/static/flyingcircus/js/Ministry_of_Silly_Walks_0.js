function redraw(){
  // Clear the entire
var p1 = ctx.transformedPoint(0,0);
var p2 = ctx.transformedPoint(canvas.width,canvas.height);
ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);

// Alternatively:
// ctx.save();
// ctx.setTransform(1,0,0,1,0,0);
// ctx.clearRect(0,0,canvas.width,canvas.height);
// ctx.restore();

//Outline
ctx.strokeStyle="#000000"


 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(0,0);
 ctx.lineTo( 770,0 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(770,0);
 ctx.lineTo( 770,850 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(770,850);
 ctx.lineTo( 0,850 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(0,850);
 ctx.lineTo( 0,0 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(0,40);
 ctx.lineTo( 540,40 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(540,40);
 ctx.lineTo( 540,160 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(540,160);
 ctx.lineTo( 0,160 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(160,160);
 ctx.lineTo( 160,270 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(160,270);
 ctx.lineTo( 0,270 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(160,270);
 ctx.lineTo( 235,235 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(235,235);
 ctx.lineTo( 235,385 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(0,385);
 ctx.lineTo( 235,385 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(770,40);
 ctx.lineTo( 690,40 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(690,40);
 ctx.lineTo( 690,155 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(690,155);
 ctx.lineTo( 650,155 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(650,155);
 ctx.lineTo( 650,310 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(650,310);
 ctx.lineTo( 770,310 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(770,385);
 ctx.lineTo( 615,385 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(615,385);
 ctx.lineTo( 615,615 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(615,615);
 ctx.lineTo( 770,615 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(615,615);
 ctx.lineTo( 615,690 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(615,690);
 ctx.lineTo( 460,770 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(460,845);
 ctx.lineTo( 460,770 );
 ctx.stroke();

 ctx.strokeStyle="#FF0000"

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(20,40);
 ctx.lineTo( 80,40 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(160,195);
 ctx.lineTo( 160,255 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(155,385);
 ctx.lineTo( 215,385 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(690,80);
 ctx.lineTo( 690,140 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(770,315);
 ctx.lineTo( 770,380 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(615,465);
 ctx.lineTo( 615,525 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(540,729);
 ctx.lineTo( 494,753 );
 ctx.stroke();

}
redraw();
drawRoute();
