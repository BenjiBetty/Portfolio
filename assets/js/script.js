//FRAMEWORK BY BENOIT "RQM-" LAURENT 
let moving1 = document.getElementById('Vector1');
let moving2 = document.getElementById('Vector2');
let moving3 = document.getElementById('Vector3');
let moving4 = document.getElementById('cheveux');
let moving5 = document.getElementById('barbe');
let moving6 = document.getElementById('moustache');
let windowWidth, windowHeight;

document.body.onmousemove = function(e) {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    console.log(windowWidth, windowHeight);

    translateFromMousePosition(moving1, e.clientX, e.clientY, windowWidth, windowHeight, 18);
    translateFromMousePosition(moving2, e.clientX, e.clientY, windowWidth, windowHeight, 18);
    translateFromMousePosition(moving3, e.clientX, e.clientY, windowWidth, windowHeight, 14);
    translateFromMousePosition(moving4, e.clientX, e.clientY, windowWidth, windowHeight, 18);
    translateFromMousePosition(moving5, e.clientX, e.clientY, windowWidth, windowHeight, 18);
    translateFromMousePosition(moving6, e.clientX, e.clientY, windowWidth, windowHeight, 14);


}

function translateFromMousePosition(domObject, mousePositionX, mousePositionY, windowWidth, windowHeight, ratio) {
    let finalX, finalY;
    let halfScreenX = windowWidth / 2;
    let halfScreenY = windowHeight / 2;

    finalX = (mousePositionX - halfScreenX) / ratio;
    finalY = (mousePositionY - halfScreenY) / ratio;

    domObject.style['transform'] = "translate(" + finalX + "px, " + finalY + "px)";
}


$(".about").hover(function() {
    $("#cheveux").css("opacity", "1");
    $("#cheveux").css("transition", "0.4s");
    $("#Vector1").css("opacity", "0");
    $("#Vector1").css("transition", "0.4s");
}, function() {
    $("#cheveux").css("opacity", "0");
    $("#cheveux").css("transition", "0.4s");
    $("#Vector1").css("opacity", "1");
    $("#Vector1").css("transition", "0.4s");
});

$(".contact").hover(function() {
    $("#barbe").css("opacity", "1");
    $("#barbe").css("transition", "0.4s");
    $("#Vector2").css("opacity", "0");
    $("#Vector2").css("transition", "0.4s");
}, function() {
    $("#barbe").css("opacity", "0");
    $("#barbe").css("transition", "0.4s");
    $("#Vector2").css("opacity", "1");
    $("#Vector2").css("transition", "0.4s");
});

$(".projects").hover(function() {
    $("#moustache").css("opacity", "1");
    $("#moustache").css("transition", "0.4s");
    $("#Vector3").css("opacity", "0");
    $("#Vector3").css("transition", "0.4s");
}, function() {
    $("#moustache").css("opacity", "0");
    $("#moustache").css("transition", "0.4s");
    $("#Vector3").css("opacity", "1");
    $("#Vector3").css("transition", "0.4s");
});