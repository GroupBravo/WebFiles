

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

function nextNode(){
  $.currentNode++;
  if ($.CurrentDisplayRoute.length<$.currentNode){
    Coords=$.CurrentDisplayRoute[$.currentNode]
    
  }
}
