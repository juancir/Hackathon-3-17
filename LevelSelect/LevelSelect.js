/* global $*/



var s = window.localStorage;
var arr;
var file = [];

$(".planet2").click(function(){
    get();
});

function get(){
    var a;
    
    arr = JSON.parse( s.getItem("Tracker") );
    arr.forEach(function(it){
        a = it.planet1;
        console.log(it.planet1);
    });
    if(a == true){
        window.location.href='../Planet_2/Planet_2.html';
    } else {
        alert("Complete Planet 1 First.");
    }
}
