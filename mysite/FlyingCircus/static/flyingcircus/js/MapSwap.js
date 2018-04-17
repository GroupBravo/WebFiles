function SwapMap(newMap){


  //Resets the canvas area
  var p1 = ctx.transformedPoint(0,0);
  var p2 = ctx.transformedPoint(canvas.width,canvas.height);
  ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);
  trackTransforms(ctx);
  ctx.resetTransform();


  //Extracts 'English' name of map
  var displayText=newMap.split("_").join(" ");
  $.CurrentMap=newMap;

  //Changes the display name
  document.getElementById('MapNameHead').innerHTML=displayText;

 // Alters a script tag to import a new javascript file for the new map
  var ToReplace=document.getElementById("MapJSFile");
  var NewFile=document.createElement('script');
  NewFile.setAttribute("id","MapJSFile");
  NewFile.setAttribute("type","text/javascript");
  NewFile.setAttribute("src", "/static/FlyingCircus/js/"+newMap+".js");
  ToReplace.parentNode.replaceChild(NewFile,ToReplace);
  CreateRoute();
  GetLabels();

  }
