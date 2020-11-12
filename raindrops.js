var rain = function() {
    var i = 0;
    var drops = "";
    console.log("Raining...");
    while (i < 100) {
        i++;
        var l = Math.random() * 100;
        var t = Math.random() * 50 + 10;
        var ad = 5 +  i/10 + Math.random();
        drops += '<div class="drop" style="left: ' + l + '%; top: -' + t + '%; animation-delay: ' + ad + 's;">'
        + '<div class="trace" style="animation-delay: ' + ad + 's;"></div>'
        + '<div class="splash" style="animation-delay: ' + ad + 's;"></div>'
        + '</div>';
    }
    $(".raindrops").append(drops);
}
var Audio;
var muted = true;

window.onload = function() {
  audio = new Audio('raindrops.mp3');
  audio.volume = 0.15;
}

$(document).ready(function() {
    $('.sound').on('click', function() {
        if (muted) {
            audio.play();
        } else {
            audio.pause();
        }
        muted = !muted;
        $('.sound-i').toggleClass('fa-volume-mute');
        $('.sound-i').toggleClass('fa-volume-up');
    });
    rain();
});

