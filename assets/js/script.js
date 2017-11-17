$(".about").hover(function() {
    $("#cheveux").css("display", "inline");
    $("#Vector1").css("display", "none");
}, function() {
    $("#cheveux").css("display", "none");
    $("#Vector1").css("display", "inline");
});

$(".contact").hover(function() {
    $("#barbe").css("display", "inline");
    $("#Vector2").css("display", "none");
}, function() {
    $("#barbe").css("display", "none");
    $("#Vector2").css("display", "inline");
});

$(".projects").hover(function() {
    $("#moustache").css("display", "inline");
    $("#Vector3").css("display", "none");
}, function() {
    $("#moustache").css("display", "none");
    $("#Vector3").css("display", "inline");
});