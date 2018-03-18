
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
    ctx.beginPath();
   ctx.rect(0, 730, 260, 135);
   ctx.fillStyle = "green";
   ctx.fill();

    ctx.strokeStyle="#000000"

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(0,0);
     ctx.lineTo( 770,0 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(770,0);
     ctx.lineTo( 770,865 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(770,865);
     ctx.lineTo( 0,865 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(0,0);
     ctx.lineTo( 0,865 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(305,0);
     ctx.lineTo( 305,730 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(305,730);
     ctx.lineTo( 0,730 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(305,370);
     ctx.lineTo( 0,370 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(460,0);
     ctx.lineTo(460,865 );
     ctx.stroke();


 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(460,190);
 ctx.lineTo( 770,190 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(460,490);
 ctx.lineTo( 770,490 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(460,690);
 ctx.lineTo( 770,690 );
 ctx.stroke();




 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(460,190);
 ctx.lineTo( 770,190 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(460,490);
 ctx.lineTo( 770,490 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(460,690);
 ctx.lineTo( 770,690 );
 ctx.stroke();

ctx.strokeStyle="#FF0000"
 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(305,120);
 ctx.lineTo( 305,190 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(305,475);
 ctx.lineTo( 305,560 );
 ctx.stroke();

 

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(460,60);
 ctx.lineTo( 460,120 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(590,190);
 ctx.lineTo( 650,190 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(570,490);
 ctx.lineTo( 635,490 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(460,560);
 ctx.lineTo( 460,625 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(460,745);
 ctx.lineTo( 460,815 );
 ctx.stroke();



  }
redraw();
drawRoute();
