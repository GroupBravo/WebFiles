function MoveToSub(){
  $.get("/polls/Test/", function(Num){
    MoveTo(Num[0],Num[1]);
    
  });

}
