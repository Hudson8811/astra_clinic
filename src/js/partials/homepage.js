$(document).ready(function () {
    $('.js-hp-banner__play').click(function () {
        console.log(1);
        $(this).addClass('hp-banner__play--hide');
        $('#hp-banner-picbg').addClass('hp-banner-picbg--hide');
        $('#hp-banner-vidbg').trigger('play');
    });

    function setVideoCenter() {
        var prop = 1.78;//16/9
        var $box = $('#hp-banner');
        var height = $box.height();
        var width = $box.width();
        var new_height = width / prop;
        if (new_height > height) {
            $box.find('video').css({
                width: width,
                height: new_height,
                top: '-' + (new_height / 2 - height / 2) + 'px',
                left: '0',
            });
        } else {
            var new_width = height * prop;
            $box.find('video').css({
                width: new_width,
                height: height,
                top: '0',
                left: '-' + (new_width / 2 - width / 2) + 'px'
            });
        }
    }

    setVideoCenter();
    $(window).resize(setVideoCenter);


});