

// Sends Get Request for route information
//Sets storage variables and calls function to generate the route
function DisplayRoute(){
  Start=document.getElementById("StartPoint").value
  End=document.getElementById("EndPoint").value


  $.get("/polls/Routes/",{"Start":Start, "End":End}, function(Info){
    MapList=Info;
    console.log("GOT INFO")
    for (i=0; i<Info.length;i++){
      console.log(Info[i])

    }
    $.currentNode=0
    $.CurrentMapList=MapList[0];

    $.Routes=Info.slice(1);
    CreateRoute();
    SwapMap($.CurrentMapList[$.CurrentMapList.length-1]);

  });

}
//Generates route on the canvas
function drawRoute(){
  for (i=0; i<$.CurrentDisplayRoute.length-1;i++){
    StartPoint=$.CurrentDisplayRoute[i];
    EndPoint=$.CurrentDisplayRoute[i+1];

    ctx.strokeStyle="#0000ff"
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.moveTo(StartPoint[0],StartPoint[1]);
    ctx.lineTo(EndPoint[0],EndPoint[1]);
    ctx.stroke();

  }

}

//Extracts and stores the line data for the current displayed map
function CreateRoute() {

  console.log($.CurrentMap)
  toShow=$.CurrentMapList.indexOf($.CurrentMap);

  if (toShow>=0){

    $.CurrentDisplayRoute=$.Routes[toShow];
    StartX=$.CurrentDisplayRoute[0][0]
    StartY=$.CurrentDisplayRoute[0][1]
    console.log("START AT DRAW")
    console.log(StartX,StartY)
    drawRoute();
    MoveTo(StartX,StartY)

        }
    else {
      $.CurrentDisplayRoute=[];
      drawRoute();
    }
  }
function prevNode(){

    $.currentNode--;
    if ($.currentNode>=0){
      console.log($.CurrentDisplayRoute)
      console.log($.currentNode)
      Coords=$.CurrentDisplayRoute[$.currentNode]
      MoveTo(Coords[0],Coords[1])
      getInstruction();
    }
    else {
      $.currentNode++;
      if ($.CurrentDisplayRoute.length>0){
        currentMapIndex=$.CurrentMapList.indexOf($.CurrentMap)
        if (currentMapIndex<$.CurrentMapList.length-1){

          SwapMap($.CurrentMapList[currentMapIndex+1]);
          $.currentNode=$.CurrentDisplayRoute.length-1
          Coords=$.CurrentDisplayRoute[$.currentNode]
          MoveTo(Coords[0],Coords[1])
          getInstruction();
        }
      }
  }
}

function nextNode(){

  $.currentNode++;
  if ($.CurrentDisplayRoute.length>$.currentNode){
    Coords=$.CurrentDisplayRoute[$.currentNode]
    MoveTo(Coords[0],Coords[1])
    getInstruction();

  }
  else {
    $.currentNode--;
    if ($.CurrentDisplayRoute.length>0){
      currentMapIndex=$.CurrentMapList.indexOf($.CurrentMap)
      if (currentMapIndex>0){
        $.currentNode=0
        SwapMap($.CurrentMapList[currentMapIndex-1])
        getInstruction();
      }
    }
  }
}


function getInstruction(){
  console.log($.currentNode,"CURRENT NODE")
  if (0==$.currentNode){
    var displayText=$.CurrentMap.split("_").join(" ");
    document.getElementById("directionText").innerHTML="Enter Map "+$.CurrentMap.split("_").join(" ")
  }
  else {if($.currentNode==$.CurrentDisplayRoute.length-1){
    var displayText=$.CurrentMap.split("_").join(" ");
      document.getElementById("directionText").innerHTML="Exit Map "+$.CurrentMap.split("_").join(" ")
  }else{
    console.log("Active")
    ToCoord=$.CurrentDisplayRoute[$.currentNode+1];
    FromCoord=$.CurrentDisplayRoute[$.currentNode-1];
    CurrentCoord=$.CurrentDisplayRoute[$.currentNode];

    ToPoint=new Victor(ToCoord[0],ToCoord[1])
    FromPoint=new Victor(FromCoord[0],FromCoord[1])
    CurrentCoord=new Victor(CurrentCoord[0],CurrentCoord[1])

    ToPoint.subtract(CurrentCoord);
    FromPoint.subtract(CurrentCoord);
    FromPoint.norm()
    ToPoint.norm()
    Angle=Math.acos(ToPoint.dot(FromPoint))
    Angle=Math.abs(Angle)*180/Math.PI
    console.log("ANGLE",Angle)
    if ( Angle>40 && Angle<140){
      ToPoint.rotate(-FromPoint.angle())
      Angle=ToPoint.angleDeg()
      console.log(Angle,"TEST VALUE")
      if (Angle>0){
        document.getElementById("directionText").innerHTML="Turn Left"
        console.log(("left"));
      }
      else {
        console.log("RIGHT")
        document.getElementById("directionText").innerHTML="Turn Right"
      }
      console.log(ToPoint.angleDeg())
    }
    else {
      console.log("STRAIGHT")
      document.getElementById("directionText").innerHTML="Carry on Straight"
    }

  }}


}
