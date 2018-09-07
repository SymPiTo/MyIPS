

var carousel = $(".carousel"),
    currdeg  = 0;
	
 
 
 

 

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 36;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 36;
  }
  carousel.css({
    "-webkit-transform": "rotateX("+currdeg+"deg)",
    "-moz-transform": "rotateX("+currdeg+"deg)",
    "-o-transform": "rotateX("+currdeg+"deg)",
    "transform": "rotateX("+currdeg+"deg)"
  });
};

$(".carouselcontainer").on('touchstart', function(e) {

    var swipe = e.originalEvent.touches,
    start = swipe[0].pageY;

    $(this).on('touchmove', function(e) {

        var contact = e.originalEvent.touches,
        end = contact[0].pageY,
        distance = end-start;

        if (distance < -10){rotateUpDown('down');} // up
        if (distance > 10){rotateUpDown('up');} // down
		
        if (distance < -40){rotateUpDown('down2');} // up
        if (distance > 40){rotateUpDown('up2');} // down
    })
 
});


function rotateUpDown(direction){
   if(direction == 'up'){
    currdeg = currdeg - 36;
	$(".carouselcontainer").off('touchmove touchend');
   };
   if(direction == 'down'){
    currdeg = currdeg + 36;
	$(".carouselcontainer").off('touchmove touchend');
   };
   if(direction == 'up2'){
    currdeg = currdeg - 72;
	$(".carouselcontainer").off('touchmove touchend');
   };
   if(direction == 'down2'){
    currdeg = currdeg + 72;
	$(".carouselcontainer").off('touchmove touchend');
   };
  carousel.css({
    "-webkit-transform": "rotateX("+currdeg+"deg)",
    "-moz-transform": "rotateX("+currdeg+"deg)",
    "-o-transform": "rotateX("+currdeg+"deg)",
    "transform": "rotateX("+currdeg+"deg)"
  });
}

function rotateY(e){
	a = e;
	 
    b = currdeg - a/4;
 wheelposition =b;
  carousel.css({
    "-webkit-transform": "rotateX("+b+"deg)",
    "-moz-transform": "rotateX("+b+"deg)",
    "-o-transform": "rotateX("+b+"deg)",
    "transform": "rotateX("+b+"deg)"
  });
}
