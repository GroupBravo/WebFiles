function drawLabels(){
  for (i=0;i<$.CurrentLabels.length; i++){

    Label=$.CurrentLabels[i][0]
    Coord=$.CurrentLabels[i][1]
    //ctx.globalAlpha=0.2;
    //ctx.fillStyle="blue";

    Rect1=parseFloat(Coord[0])
    Rect2=parseFloat(Coord[1])-40
    /**ctx.fillRect(Rect1,Rect2,Label.length*50*537.37/1000,45);
    ctx.globalAlpha=1
    **/
    ctx.fillStyle="#3737f4"
    ctx.font = "25px  Verdana";
    ctx.fillText(Label,Coord[0],Coord[1]);

  }
}
$.CurrentLabels=[];
function GetLabels(){
      $.get("/FlyingCircus/getLabels/",{"Map":$.CurrentMap}, function(Info){
        $.CurrentLabels=Info
        drawLabels();
      });

}
