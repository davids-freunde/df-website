var script = document.createElement('script');
script.src = 'js/jquery-3.3.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function() {
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3200,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

var loadNewPage = function() {
    window.location.href = "home.html"
}

var fadeLogoOut = function() {
    $('#hide').fadeOut('slow');
    $('#loading-text').fadeOut('slow');
    $('#loading-percentage').fadeOut('slow');
    $('#progress-bar').fadeOut('slow');
    $('#loaded').fadeOut('slow');
}


window.onload = function() {
    setTimeout(fadeLogoOut, 3200);
    setTimeout(loadNewPage, 3800);
}
