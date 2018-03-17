/* global $*/
$(document).ready(function() {
     var x = 50;
     function moveRight() {
     x = x + 20;
     $("#astronaut_man").css("left", x);
  }
  
    function moveLeft() { 
    x = x - 20; 
    $("#astronaut_man").css('left', x);
  } 

    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
            case 37:
				moveLeft(); 
				break;
			// Up Arrow Pressed
			case 38:
				$('#astronaut_man').animate({up: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				moveRight();
				break;
			// Down Arrow Pressed
			case 40:
				$('#astronaut_man').animate({down: "+=10px"}, 'fast');
				break;
		}
	});
});
