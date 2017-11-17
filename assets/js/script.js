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