function SwapMap(newMap){

//LOOK HERE FOR translate
  var p1 = ctx.transformedPoint(0,0);
  var p2 = ctx.transformedPoint(canvas.width,canvas.height);
  ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);
  trackTransforms(ctx);
  ctx.resetTransform();
  //tx.translate(100,0);
//END OF LOOK

  var displayText=newMap.split("_").join(" ");
  document.getElementById('MapNameHead').innerHTML=displayText;

  var ToReplace=document.getElementById("MapJSFile");
  var NewFile=document.createElement('script');
  NewFile.setAttribute("id","MapJSFile");
  NewFile.setAttribute("type","text/javascript");
  NewFile.setAttribute("src", "/static/polls/js/"+newMap+".js");
  ToReplace.parentNode.replaceChild(NewFile,ToReplace);

  }
