$('.tab').on("click", function(){
  if ($(this).hasClass("tab1")){
    $(".tab1").addClass("active");
    $(".tab2").removeClass("active");
    $("#tabContent1").css("display", "block");
    $("#tabContent2").css("display", "none");
  }
  else if ($(this).hasClass("tab2")){
    $(".tab2").addClass("active");
    $(".tab1").removeClass("active");
    $("#tabContent2").css("display", "block");
    $("#tabContent1").css("display", "none");
  }
});

function burger () {
  // setup variables to target IDs on the page
  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  var quit = document.getElementById('quit');
  // add styling so page changes when burger fuction is clicked
  burger.style.padding = "16px 16px 200vw 200vw";
  links.style.display = 'flex';
  quit.style.display = 'inline';

}

function quit(){
    // setup variables to target IDs on the page
    var burger = document.getElementById('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    // add styling so page changes when burger fuction is clicked
    burger.style.padding = "16px 16px 32px 32px";
    links.style.display = 'none';
    quit.style.display = 'none';
  
}