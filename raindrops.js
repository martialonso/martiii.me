var rain = function() {
    var i = 0;
    var drops = "";
    console.log("Raining...");
    while (i < 33) {
        i++;
        drops += '<div class="drop" style="left: ' + (i * 3) + '%;">'
        + '<div class="trace"></div>'
        + '<div class="splash"></div>'
        + '</div>';
        
        console.log("Addind drop...");
    }
    $(".raindrops").append(drops);
}

$(document).ready(rain);