function MoveToSub(){
  Search=document.getElementById("SearchInput").value

  $.get("/polls/GoTo/",{"Room":Search}, function(Data){

    mapToShow=Data[0];
    coord=Data[1];

    SwapMap(mapToShow);
    console.log(mapToShow);
    console.log(coord);

    MoveTo(coord[0],coord[1])
    console.log("Working");
  });
}


function MoveTo(Xcoord,Ycoord){
  var p1 = ctx.transformedPoint(0,0);
  var p2 = ctx.transformedPoint(canvas.width,canvas.height);
  ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);
  trackTransforms(ctx);
  ctx.resetTransform();
    //ctx.translate(-Xcoord,-Ycoord);
  console.log("Moving to point",Xcoord,Ycoord)
  var pt = ctx.transformedPoint(Xcoord,Ycoord);
  ctx.translate(pt.x,pt.y);
  ctx.scale(3,3);
  ctx.translate(-pt.x,-pt.y);
  //UpdateCanvas();
}