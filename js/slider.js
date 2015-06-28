var sliderInt = 1;
var sliderNext = 2;
var newSlide, count, loop;

$(document).ready(function(){
    $("#slider > img#1").fadeIn(300);
    startSlide();
});

function startSlide() {
  count = $("#slider > img").size();

  loop = setInterval(function() {
    if (sliderNext > count){
      sliderNext = 1;
      sliderInt = 1;
    }

    $("#slider > img").fadeOut(300);
    $("#slider > img#" + sliderNext).fadeIn(300);

    sliderInt = sliderNext;
    sliderNext += 1;
  },3000);

}

function stopLoop() {
  window.clearInterval(loop);
}

function prev() {
  newSlide = sliderInt - 1;
  showSlide(newSlide);
}

function next() {
  newSlide = sliderInt + 1;
  showSlide(newSlide);
}

function showSlide(id) {
  stopLoop();

  if (id > count){
    id = 1;
  } else if (id < 1){
    id = count;
  }

  $("#slider > img").fadeOut(300);
  $("#slider > img#" + id).fadeIn(300);

  sliderInt = id;
  sliderNext = id + 1;
  startSlide();

}

$("#slider > img").hover(function(){
  stopLoop();
}, function(){
  startSlide();
});
