




function validation(){
  $('#StartPoint').attr('style', "border:0px;");
  $('#EndPoint').attr('style', "border:0px;");
  $('#emptystart').hide();
  $('#emptyfinish').hide();
  $('#samevalues').hide();
  $('#wrongstartvalue').hide();
  $('#wrongendvalue').hide();

  if (document.getElementById("StartPoint").value == "") {
    $('#emptystart').show();
    $('#StartPoint').attr('style', "border:#FF0000 2px solid;");
  }
  if (document.getElementById("EndPoint").value == "") {
    $('#emptyfinish').show();
    $('#EndPoint').attr('style', "border:#FF0000 2px solid;");
  }
  if (document.getElementById("StartPoint").value == document.getElementById("EndPoint").value) {
    $('#samevalues').show();
    $('#StartPoint').attr('style', "border:#FF0000 2px solid;");
    $('#EndPoint').attr('style', "border:#FF0000 2px solid;");
    return false;
  }
  for (i=0; i < $.locations.length; i++) {
    if ($.locations[i] == document.getElementById("StartPoint").value){
      return true;
    }
  }
  $('#wrongstartvalue').show();
  $('#StartPoint').attr('style', "border:#FF0000 2px solid;");
  for (i=0; i < $.locations.length; i++) {
    if ($.locations[i] == document.getElementById("EndPoint").value) {
      return true;
    }
  }
  $('#wrongendvalue').show();
  $('#EndPoint').attr('style', "border:#FF0000 2px solid;");
}

function smallsearchvalidation(){
  $('#SmallSearchInput').attr('style', "border:0px;");
  $('#wrongsmallsearch').hide();
  $('#emptysmallsearch').hide();
  if (document.getElementById("SmallSearchInput").value == "") {
    $('#emptysmallsearch').show();
    $('#SmallSearchInput').attr('style', "border:#FF0000 2px solid;");
  }
  for (i=0; i < $.locations.length; i++) {
    if ($.locations[i] == document.getElementById("SmallSearchInput").value) {
      return true;
    }
  }
  $('#wrongsmallsearch').show();
  $('#SmallSearchInput').attr('style', "border:#FF0000 2px solid;");
}

function searchvalidation(){
  $('#SearchInput').attr('style', "border:0px;");
  $('#wrongsearch').hide();
  $('#emptysearch').hide();
  if (document.getElementById("SearchInput").value == "") {
    $('#emptysearch').show();
    $('#SearchInput').attr('style', "border:#FF0000 2px solid;");
  }
  for (i=0; i < $.locations.length; i++) {
    if ($.locations[i] == document.getElementById("SearchInput").value) {
      return true;
    }
  }
  $('#wrongsearch').show();
  $('#SearchInput').attr('style', "border:#FF0000 2px solid;");
}












$.locations=[];

function autocomplete(inp) {
  arr=$.locations

  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*for each letter (index) in the item*/
        for (j = 0; j < arr[i].length; j++) {
          /*check if the item includes the letters/numbers entered as the text field value:*/
          if (arr[i].substr(j, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = arr[i].substr(0,j);
            b.innerHTML += "<strong>" + arr[i].substr(j, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(j+val.length, arr[i].length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

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
      $.get("/polls/getLabels/",{"Map":$.CurrentMap}, function(Info){
        $.CurrentLabels=Info
        drawLabels();
      });

}

function GetRooms(){

  $.get("/polls/validNames",function(Info){
    $.locations=Info
    console.log($.locations);

    autocomplete(document.getElementById("StartPoint"), $.locations);
    autocomplete(document.getElementById("EndPoint"), $.locations);
    autocomplete(document.getElementById("SearchInput"), $.locations);
  });

}
GetRooms();