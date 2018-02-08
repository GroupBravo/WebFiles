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
ctx.lineTo(1000,0);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(0,0);
ctx.lineTo(0,2500)
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(1000,0)
ctx.lineTo(1000,2500);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(1000,2500);
ctx.lineTo(0,2500);
ctx.stroke();
//Outline

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(0,50);
ctx.lineTo(703,50);
ctx.stroke();


ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(700,50);
ctx.lineTo(700,200);
ctx.stroke();


ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(703,200);
ctx.lineTo(197,200);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(200,200);
ctx.lineTo(200,350);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(203,350);
ctx.lineTo(0,350);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(200,200);
ctx.lineTo(0,200);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(200,350);
ctx.lineTo(300,300);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(300,300);
ctx.lineTo(300,500);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(303,500);
ctx.lineTo(0,500);
ctx.stroke();



//agnieszka
ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(1000, 50);
ctx.lineTo(897, 50);
ctx.stroke();


ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(900, 47);
ctx.lineTo(900, 200);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth= 6;
ctx.moveTo(903, 200);
ctx.lineTo(840, 200);
ctx.stroke();


ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(840, 197);
ctx.lineTo(840, 400);
ctx.stroke();


ctx.beginPath();
ctx.lineWidth= 6;
ctx.moveTo(837, 400);
ctx.lineTo(1000, 400);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth= 6;
ctx.moveTo(1000, 500);
ctx.lineTo(800, 500);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth= 6;
ctx.moveTo(800, 500);
ctx.lineTo(800, 800);
ctx.stroke();


ctx.beginPath();
ctx.lineWidth= 6;
ctx.moveTo(800, 797);
ctx.lineTo(800, 903);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth= 6;
ctx.moveTo(800, 900);
ctx.lineTo(600, 1000);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth= 6;
ctx.moveTo(1000, 800);
ctx.lineTo(800, 800);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth= 6;
ctx.moveTo(1000, 1100);
ctx.lineTo(600, 1100);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth= 6;
ctx.moveTo(600, 997);
ctx.lineTo(600, 1103);
ctx.stroke();

//Doors
ctx.strokeStyle="#ff0000"

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(100,50);
ctx.lineTo(20,50);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(200,250);
ctx.lineTo(200,330);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(280,500);
ctx.lineTo(200,500);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(1000,410);
ctx.lineTo(1000,490);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(900,100);
ctx.lineTo(900,180);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(800,600);
ctx.lineTo(800,680);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.moveTo(700,950);
ctx.lineTo(640,980);
ctx.stroke();
}
