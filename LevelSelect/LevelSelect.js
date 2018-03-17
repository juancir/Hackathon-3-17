/* global $*/

var s = window.localStorage;
var arr;
var file = [];

$(".planet1").click(function() {
    s.setItem("Tracker", JSON.stringify(file));
});

$(".planet2").click(function() {
    get();
});

function get() {
    var a;

    arr = JSON.parse(s.getItem("Tracker"));

    arr.forEach(function(it) {
        a = it.Planet1;
        console.log(a);
    });

    if (a == true) {
        window.location.href = '../Planet_2/Planet_2.html';
    }
    else {
        alert("Complete Planet 1 First.");
    }
}

$(document).ready(function() {

    $.getJSON(

        "https://api.giphy.com/v1/gifs/search?q=warp&api_key=dc6zaTOxFJmzC",


        function(response) {
            console.log(response);
            $("#gif").append("<img src=" + response.data[4].images.fixed_width_downsampled.url + ">");
        });
});
