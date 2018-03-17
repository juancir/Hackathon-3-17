/* global $*/

$(document).ready(function() {
    var x = 0;
    var y = 0;

    function moveRight() {
        x = x + 20;
        $("#astronaut_man").css("left", x);
    }

    function moveLeft() {
        x = x - 20;
        $("#astronaut_man").css("left", x);
    }

    function moveUp() {
        y = y - 20;
        $('#astronaut_man').css("top", y);

    }

    function moveDown() {
        y = y + 20;
        $('#astronaut_man').css("top", y);
    }

    function checkCollision() {
        var astroLeft = $("#astronaut_man").offset().left;
        var endLeft = $(".end").offset().left;
        var astroTop = $("#astronaut_man").offset().top;
        var endTop = $(".end").offset().top;
        var astroRight = astroLeft + $("#astronaut_man").width();
        var endRight = endLeft + $(".end").width();
        var astroBottom = astroTop + $("#astronaut_man").height();
        var endBottom = endTop + $(".end").height();
        if (astroRight > endLeft && astroLeft < endRight && astroBottom > endTop && astroTop < endBottom) {
            window.location.replace("https://hackathon-3-17-juan21.c9users.io/LevelSelect/GameWin.html")
        }
    }
    $(document).keydown(function(key) {
        switch (parseInt(key.which, 10)) {
            // Left arrow key pressed
            case 37:
                moveLeft();
                checkCollision()
                break;
                // Up Arrow Pressed
            case 38:
                moveUp();
                checkCollision()
                break;
                // Right Arrow Pressed
            case 39:
                moveRight();
                checkCollision()
                break;
                // Down Arrow Pressed
            case 40:
                moveDown();
                checkCollision()
                break;
        }
    });

});