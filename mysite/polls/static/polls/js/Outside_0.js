redraw=function(){
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
ctx.moveTo(460,115);
ctx.lineTo( 460,440 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(460,440);
ctx.lineTo( 680,440 );
ctx.stroke();



ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(680,440);
ctx.lineTo( 680,115 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(680,115);
ctx.lineTo( 460,115 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(40,840);
ctx.lineTo( 40,605 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(240,605);
ctx.lineTo( 40,605 );
ctx.stroke();



ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(240,605);
ctx.lineTo( 240,840 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(40,840);
ctx.lineTo( 240,840 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(710,720);
ctx.lineTo( 620,720 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(620,810);
ctx.lineTo( 620,720 );
ctx.stroke();



ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(710,720);
ctx.lineTo( 710,810 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(620,810);
ctx.lineTo( 710,810 );
ctx.stroke();


ctx.strokeStyle="#FF0000"

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(490,115);
ctx.lineTo( 550,115 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(240,630);
ctx.lineTo( 240,670 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(640,720);
ctx.lineTo( 670,720 );
ctx.stroke();
}
redraw();
drawRoute();
