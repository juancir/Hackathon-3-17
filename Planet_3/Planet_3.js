/* global $*/
$(document).ready(function() {
      var x = 10;
     var y = 500; 
     
     function moveRight() {
     x = x + 20;
     $("#astronaut_man").css("left", x);
    }
  
    function moveLeft() { 
    x = x - 20; 
    $("#astronaut_man").css("left", x);
    } 
    
    function moveUp() { 
      y = y - 40;
      $('#astronaut_man').css("top", y);
       console.log(y);
       setInterval(function () {
           if ( y <= 450) {
               console.log(y);
               $("#astronaut_man").css("top", 495);
            y = 4950;
           }
       }, 1000);
    } 
      function moveDown() { 
      y = y + 20;
      $('#astronaut_man').css("top", y);
    } 

    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
            case 37:
                if(x <= 10) { 
                    
                } else { 
				moveLeft(); 
                } 
				break;
			// Up Arrow Pressed
			case 38:
			    moveUp();
				break;
			// Right Arrow Pressed
			case 39:
			    if(x >= 1200){ 
			    } else {   
                    moveRight();
			    }
				break;
			// Down Arrow Pressed
			case 40:
				moveDown();
				break;
		}
	});

});
