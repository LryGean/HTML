$(function () {
    $('.sun').click(function (e) {
        e.stopProagation();
        $("html").toggleClass('container-night');
        $(".sky-night").toggleClass('sky-night-fade');
        $("p, h1").toggleClass('text-color');
        $(".ocean-night").toggleClass('ocean-night-fade');
        $(".moon").toggleClass('moon-fade');
        $(".ocean").toggleClass('animation-stop');
        $(".bird").toggleClass('birds-fly');
        $(".boat").toggleClass('boat-sail');
        $(".mountain-top,.mountain-top >*").toggleClass('mountain-top-night');
        $(".mountain-middle,.mountain-niddle >*").toggleClass('mountain-middle-night');
        $(".mountain-back,.mountain-back >*").toggleClass('mountain-back-night');
        $(".cloud").delay(2500).fadeToggle(2500);
        $(".stars").toggleClass('star-fade');
        $(".shooting-star").toggleClass('shooting');

        var angle = ($('.sun-container').data('angle') + 360) || 360;
        $('.sun-container').css({
            'transform':'rotate(' + angle +'deg)'
        });
        $('.sun-container').data('angel', angle);

    })
})