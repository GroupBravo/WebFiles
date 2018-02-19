function ShowTest(){
  $.get("/polls/Test/", function(data){
    for (i=0; i<data.length;i++){
        p=Number(data[i])+2
        console.log(p);
    }
    console.log(data);
  });

}
