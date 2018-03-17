/* global $*/


var s = window.localStorage;
var arr;
var file = [];

$("#btnplay").click(function() {
    update();
});

function update() {
    s.removeItem("Tracker");
    s.setItem("Tracker", JSON.stringify(file));
}
