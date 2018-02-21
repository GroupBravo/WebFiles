function MoveTo(Xcoord,Ycoord){
  var p1 = ctx.transformedPoint(0,0);
  var p2 = ctx.transformedPoint(canvas.width,canvas.height);
  ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);
  trackTransforms(ctx);
  ctx.resetTransform();

  ctx.translate(-Xcoord+100,-Ycoord+100);
  redraw();
  ctx.scale(1.7,1.7);
  redraw();
}
