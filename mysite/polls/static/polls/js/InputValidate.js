function CheckStartPoint() {
  if (document.getElementById("StartPoint").value == "") {
    $('#emptystart').show();
    $('#StartPoint').attr('style', "border:#FF0000 2px solid;");
    return false;
  }

  for (i=0; i < $.locations.length; i++) {

    if ($.locations[i] == document.getElementById("StartPoint").value){
    return true;
    }
  }
  $('#wrongstartvalue').show();
  $('#StartPoint').attr('style', "border:#FF0000 2px solid;");
  return false;

}

function CheckEndPoint(){

    if (document.getElementById("EndPoint").value == "") {
      $('#emptyfinish').show();
      $('#EndPoint').attr('style', "border:#FF0000 2px solid;");
      return false;
    }

    for (i=0; i < $.locations.length; i++) {
      if ($.locations[i] == document.getElementById("EndPoint").value) {
        return true;
      }
    }
    $('#wrongendvalue').show();
    $('#EndPoint').attr('style', "border:#FF0000 2px solid;");
    return false;

}

function CheckEquality(){
  if (document.getElementById("StartPoint").value == document.getElementById("EndPoint").value) {
    $('#samevalues').show();
    $('#StartPoint').attr('style', "border:#FF0000 2px solid;");
    $('#EndPoint').attr('style', "border:#FF0000 2px solid;");
    return false;
  }
  return true

}
function validation(){
  $('#StartPoint').attr('style', "border:0px;");
  $('#EndPoint').attr('style', "border:0px;");
  $('#emptystart').hide();
  $('#emptyfinish').hide();
  $('#samevalues').hide();
  $('#wrongstartvalue').hide();
  $('#wrongendvalue').hide();
  Start=CheckStartPoint();
  End=CheckEndPoint();
  if (Start==true && End==true){
    return CheckEquality();
  }
  return false;
  }





function smallsearchvalidation(){
  $('#SmallSearchInput').attr('style', "border:0px;");
  $('#wrongsmallsearch').hide();
  $('#emptysmallsearch').hide();
  if (document.getElementById("SmallSearchInput").value == "") {
    $('#emptysmallsearch').show();
    $('#SmallSearchInput').attr('style', "border:#FF0000 2px solid;");
    return false;
  }
  for (i=0; i < $.locations.length; i++) {
    if ($.locations[i] == document.getElementById("SmallSearchInput").value) {
      return true;
    }
  }
  $('#wrongsmallsearch').show();
  $('#SmallSearchInput').attr('style', "border:#FF0000 2px solid;");
  return false
}

function searchvalidation(){
  $('#SearchInput').attr('style', "border:0px;");
  $('#wrongsearch').hide();
  $('#emptysearch').hide();
  if (document.getElementById("SearchInput").value == "") {
    $('#emptysearch').show();
    $('#SearchInput').attr('style', "border:#FF0000 2px solid;");
    return false  
  }
  for (i=0; i < $.locations.length; i++) {
    if ($.locations[i] == document.getElementById("SearchInput").value) {
      return true;
    }
  }
  $('#wrongsearch').show();
  $('#SearchInput').attr('style', "border:#FF0000 2px solid;");
}
