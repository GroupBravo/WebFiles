//Sets global variables
$.CurrentDisplayRoute=[];
$.CurrentMap="Ministry_of_Silly_Walks_0";
$.CurrentMapList=[]
$.Routes=[]

//Target canvas
var canvas = document.getElementsByTagName('canvas')[0];
canvas.height=8000, canvas.width=1000;


//Create canvas contorler
window.onload = function(){
  var ctx = canvas.getContext('2d');
  trackTransforms(ctx);


  function UpdateCanvas(){
    redraw();
    drawRoute();
    drawLabels();

  }
//Draw default map and
UpdateCanvas();

myElement=document.getElementById('canvasHolder')
  var hammertime = new Hammer(myElement);
  hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL, threshold: 10 });
  currentTime=80
  hammertime.on('pan', function(ev) {
    if (ev.deltaTime<80){
      lastX=0
      lastY=0
    }
    ctx.translate(ev.deltaX-lastX,ev.deltaY-lastY);
    lastX=ev.deltaX
    lastY=ev.deltaY
    UpdateCanvas();
  	console.log(ev);
  });

  hammertime.get('pinch').set({ enable: true, threshold : 10 });
  hammertime.on('pinch', function(ev) {
      zoom(ev.delta)
  });
GetLabels();
  var lastX=canvas.width/2, lastY=canvas.height/2;
  var dragStart,dragged;


  //Records mouse location on mouse down event
  canvas.addEventListener('mousedown',function(evt){
    document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
    lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
    lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
    dragStart = ctx.transformedPoint(lastX,lastY);
    dragged = false;
  },false);

  //Tracks drag and translates canvas and redraws graphics accordingly
  canvas.addEventListener('mousemove',function(evt){
    lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
    lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
    dragged = true;
    if (dragStart){
      var pt = ctx.transformedPoint(lastX,lastY);
      ctx.translate(pt.x-dragStart.x,pt.y-dragStart.y);
      UpdateCanvas();
    }
  },false);

  //Detects end of drag, If no drag occurs is treated as a zoom
  canvas.addEventListener('mouseup',function(evt){
    dragStart = null;
    if (!dragged) zoom(evt.shiftKey ? -1 : 1 );
  },false);

  //Zoom calculates a scaling factor and scales the canvas
  var scaleFactor = 1.1;
  var zoom = function(clicks){
    var pt = ctx.transformedPoint(lastX,lastY);
    ctx.translate(pt.x,pt.y);
    var factor = Math.pow(scaleFactor,clicks*0.3);
    ctx.scale(factor,factor);
    ctx.translate(-pt.x,-pt.y);
    UpdateCanvas();
  }
  //Detects scroll sends Distance scrolled to the zoom function
  var handleScroll = function(evt){
    var delta = evt.wheelDelta ? evt.wheelDelta/40 : evt.detail ? -evt.detail : 0;
    if (delta) zoom(delta);
    return evt.preventDefault() && false;
  };
  canvas.addEventListener('DOMMouseScroll',handleScroll,false);
  canvas.addEventListener('mousewheel',handleScroll,false);
};

// Adds ctx.getTransform() - returns an SVGMatrix
// Adds ctx.transformedPoint(x,y) - returns an SVGPoint

//Sets system to track current canvas location
function trackTransforms(ctx){
  var svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
  var xform = svg.createSVGMatrix();
  ctx.getTransform = function(){ return xform; };

  var savedTransforms = [];
  var save = ctx.save;

  //saves the current transform state
  ctx.save = function(){
    savedTransforms.push(xform.translate(0,0));
    return save.call(ctx);
  };

  //Restores previous transform
  var restore = ctx.restore;
  ctx.restore = function(){
    xform = savedTransforms.pop();
    return restore.call(ctx);
  };

  //Performs a scale on the matirx
  var scale = ctx.scale;
  ctx.scale = function(sx,sy){
    xform = xform.scaleNonUniform(sx,sy);
    return scale.call(ctx,sx,sy);
  };

  //Translates the matrix
  var translate = ctx.translate;
  ctx.translate = function(dx,dy){
    xform = xform.translate(dx,dy);
    return translate.call(ctx,dx,dy);
  };

  //transforms the matrix
  var transform = ctx.transform
  ctx.transform = function(a,b,c,d,e,f){
    var m2 = svg.createSVGMatrix();
    m2.a=a; m2.b=b; m2.c=c; m2.d=d; m2.e=e; m2.f=f;
    xform = xform.multiply(m2);
    return transform.call(ctx,a,b,c,d,e,f);
  };

  //Set the values of the transform matrix
  var setTransform = ctx.setTransform;
  ctx.setTransform = function(a,b,c,d,e,f){
    xform.a = a;
    xform.b = b;
    xform.c = c;
    xform.d = d;
    xform.f = f;
    xform.e = e;
    return setTransform.call(ctx,a,b,c,d,e,f);
  };

  //A point to represent the transform
  var pt  = svg.createSVGPoint();
  ctx.transformedPoint = function(x,y){
    pt.x=x; pt.y=y;
    return pt.matrixTransform(xform.inverse());
  }
}
