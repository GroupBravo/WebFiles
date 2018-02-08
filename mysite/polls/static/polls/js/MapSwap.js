function SwapMap(newMap){
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
    ctx.moveTo(0,0);
    ctx.lineTo(500,0);
    ctx.stroke();
  }


  var ToReplace=document.getElementById("MapJSFile")
  var NewFile=document.createElement('script');
  NewFile.setAttribute("id","MapJSFile");
  NewFile.setAttribute("type","text/javascript");
  NewFile.setAttribute("src", "/static/polls/js/Empty.js");
  ToReplace.parentNode.replaceChild(NewFile,ToReplace);

  }
