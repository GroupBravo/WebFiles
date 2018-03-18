
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
ctx.moveTo(770,780);
ctx.lineTo( 690,780 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(690,780);
ctx.lineTo( 690,865 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(575,865);
ctx.lineTo( 575,775 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(575,775);
ctx.lineTo( 480,775 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(480,865);
ctx.lineTo( 480,650 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(480,650);
ctx.lineTo( 350,650 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(350,650);
ctx.lineTo( 350,865 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(155,655);
ctx.lineTo( 295,655 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(295,655);
ctx.lineTo( 295,785 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(295,785);
ctx.lineTo( 155,785 );
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(155,785);
ctx.lineTo( 155,655 );
ctx.stroke();

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
     ctx.moveTo(0,865);
     ctx.lineTo( 0,0 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(175,0);
     ctx.lineTo( 175,355 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(175,355);
     ctx.lineTo( 0,355 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(175,175);
     ctx.lineTo( 0,175 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(310,0);
     ctx.lineTo( 310,345 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(310,345);
     ctx.lineTo( 770,345 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(310,240);
     ctx.lineTo( 770,240 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(0,420);
     ctx.lineTo( 175,420 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(175,420);
     ctx.lineTo( 175,580 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(175,580);
     ctx.lineTo( 0,580 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(280,415);
     ctx.lineTo( 770,415 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(280,415);
     ctx.lineTo( 280,600 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(280,600);
     ctx.lineTo( 770,600 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(580,600);
     ctx.lineTo( 580,750 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(580,750);
     ctx.lineTo( 655,750 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(655,750);
     ctx.lineTo( 655,600 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(0,710);
     ctx.lineTo( 110,710 );
     ctx.stroke();

     ctx.beginPath();
     ctx.lineWidth = 6;
     ctx.moveTo(110,710);
     ctx.lineTo( 110,865 );
     ctx.stroke();

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
 ctx.moveTo(0,865);
 ctx.lineTo( 0,0 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(175,0);
 ctx.lineTo( 175,355 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(175,355);
 ctx.lineTo( 0,355 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(175,175);
 ctx.lineTo( 0,175 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(310,0);
 ctx.lineTo( 310,345 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(310,345);
 ctx.lineTo( 770,345 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(310,240);
 ctx.lineTo( 770,240 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(0,420);
 ctx.lineTo( 175,420 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(175,420);
 ctx.lineTo( 175,580 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(175,580);
 ctx.lineTo( 0,580 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(280,415);
 ctx.lineTo( 770,415 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(280,415);
 ctx.lineTo( 280,600 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(280,600);
 ctx.lineTo( 770,600 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(580,600);
 ctx.lineTo( 580,750 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(580,750);
 ctx.lineTo( 655,750 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(655,750);
 ctx.lineTo( 655,600 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(0,710);
 ctx.lineTo( 110,710 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(110,710);
 ctx.lineTo( 110,865 );
 ctx.stroke();


 ctx.strokeStyle="#FF0000"

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(175,40);
 ctx.lineTo( 175,115 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(310,70);
 ctx.lineTo( 310,140 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(55,355);
 ctx.lineTo( 115,355 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(505,345);
 ctx.lineTo( 600,345 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(655,415);
 ctx.lineTo( 735,415 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(20,580);
 ctx.lineTo( 80,580 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(110,735);
 ctx.lineTo( 110,790 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(190,655);
 ctx.lineTo( 260,655 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(185,785);
 ctx.lineTo( 260,785 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(655,610);
 ctx.lineTo( 655,660 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(480,690);
 ctx.lineTo( 480,735 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(575,810);
 ctx.lineTo( 575,850 );
 ctx.stroke();

 ctx.beginPath();
 ctx.lineWidth = 6;
 ctx.moveTo(710,780);
 ctx.lineTo( 760,780 );
 ctx.stroke();

  }
redraw();
drawRoute();
