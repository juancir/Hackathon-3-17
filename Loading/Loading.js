/* global $*/
$(document).ready(function() {
    $(".sgame").hide();
});

var a;



function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 50);
    var nval;

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        }
        else {
            width++;
            elem.style.width = width + '%';
            nval = (elem.innerHTML = width * 1 + '%');
        }

        if (width != 100) {
            $(".sgame").hide();
        }
        else if (width == 100) {
            $(".sgame").show();
        }

        console.log(width);
    }

}
