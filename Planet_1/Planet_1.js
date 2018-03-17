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
               $("#astronaut_man").css("top", 500);
            y = 500;
           }
       }, 1000);
    } 
    
    function checkPosY(y) { 
     if( y >= 490) { 
         setInterval(1000);
         y = y + 40;
     }  
        
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
			        set();
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

var s = window.localStorage;
var arr;
var file = [];

function set(){
    file.push({"Planet1": true});
    s.setItem("Tracker", JSON.stringify(file));
    window.location.href='../LevelSelect/LevelSelect.html';
}

//   function leftArrowPressed() {
//             var element = document.getElementById("astronaut_man");
//             element.style.left = parseInt(element.style.left) - 5 + 'px';
//             }

//             function rightArrowPressed() {
//             var element = document.getElementById("astronaut_man");
//             element.style.left = parseInt(element.style.left) + 5 + 'px';

//             }

//             function upArrowPressed() {
//             var element = document.getElementById("astronaut_man");
//             element.style.top = parseInt(element.style.top) - 5 + 'px';
//             }

//             function downArrowPressed() {
//             var element = document.getElementById("astronaut_man");
//             element.style.top = parseInt(element.style.top) + 5 + 'px';
//             }

//             function moveSelection(evt) {
//                 switch (evt.keyCode) {
//                     case 37:
//                     leftArrowPressed();
//                     break;
//                     case 39:
//                     rightArrowPressed();
//                     break;
//                     case 38:
//                     upArrowPressed();
//                     break;
//                     case 40:
//                     downArrowPressed();
//                     break;
//                     }
//                 }
                
//         function docReady()  {
//           window.addEventListener('keydown', moveSelection);
//         }
});  
