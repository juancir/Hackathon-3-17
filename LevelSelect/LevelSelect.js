/* global $*/



var s = window.localStorage;
var arr;
var file = [];

$(".planet1").click(function(){
    file.push({"planet1": true});
    set(file);
    console.log("hi");
});

$(".planet2").click(function(){
    file.push({"planet2": true});
    set(file);
    get();
});

function set(a){
    s.setItem("Tracker", JSON.stringify(a));
}

function get(){
    var a;
    
    arr = JSON.parse( s.getItem("Tracker") );
    arr.forEach(function(it){
        a = it.planet1;
        console.log(it.planet1);
    });
    if(a == true){
        $(".planet2").attr("onclick", "window.location.href='../Planet_2/Planet_2.html'");
    } else {
        alert("Complete Planet 1 First.");
    }
}
